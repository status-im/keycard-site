pipeline {
  agent { label 'linux' }

  options {
    disableConcurrentBuilds()
    /* manage how many builds we keep */
    buildDiscarder(logRotator(
      numToKeepStr: '20',
      daysToKeepStr: '30',
    ))
  }

  environment {
    SCP_OPTS = 'StrictHostKeyChecking=no'
    DEV_HOST = 'jenkins@node-01.do-ams3.proxy.misc.statusim.net'
    DEV_SITE = 'dev.keycard.tech'
    GH_USER = 'status-im-auto'
    GH_MAIL = 'auto@status.im'
  }

  stages {
    stage('Git Prep') {
      steps {
        sh "git config user.name ${env.GH_USER}"
        sh "git config user.email ${env.GH_MAIL}"
      }
    }

    stage('Install Deps') {
      steps {
        sh 'yarn install --ignore-optional'
      }
    }

    stage('Build') {
      steps {
        sh 'yarn run build:dist'
      }
    }

    stage('Publish Prod') {
      when { expression { env.GIT_BRANCH ==~ /.*master/ } }
      steps {
        withCredentials([string(
          credentialsId: 'jenkins-github-token',
          variable: 'GH_TOKEN',
        )]) {
          sh 'yarn run deploy'
        }
      }
    }

    stage('Publish Devel') {
      when { expression { env.GIT_BRANCH ==~ /.*develop/ } }
      steps {
        sshagent(credentials: ['jenkins-ssh']) {
          sh """
            rsync -e 'ssh -o ${SCP_OPTS}' -r --delete dist/. \
            ${env.DEV_HOST}:/var/www/${env.DEV_SITE}/
          """
        }
      }
    }
  }
}
