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
    DEV_HOST = 'jenkins@node-01.do-ams3.sites.misc.statusim.net'
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
        sh 'yarn run build'
      }
    }

    stage('Publish Prod') {
      when { expression { GIT_BRANCH.endsWith("master") } }
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
      when { expression { !GIT_BRANCH.endsWith("master") } }
      steps {
        sshagent(credentials: ['jenkins-ssh']) {
          sh """
            rsync -e 'ssh -o StrictHostKeyChecking=no' -r --delete \
              public/* ${env.DEV_HOST}:/var/www/dev-keycard/
          """
        }
      }
    }
  }
}
