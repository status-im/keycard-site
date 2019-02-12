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
    GIT_USER = 'status-im-auto'
    GIT_MAIL = 'auto@status.im'
  }

  stages {
    stage('Git Prep') {
      steps {
        sh "git config user.name ${env.GIT_USER}"
        sh "git config user.email ${env.GIT_MAIL}"
      }
    }

    stage('Install Deps') {
      steps {
        sh 'npm install'
      }
    }

    stage('Build') {
      steps {
        sh 'yarn run build:dist'
      }
    }

    stage('Publish Prod') {
      when { expression { env.GIT_BRANCH ==~ /.*master/ } }
      steps { script {
        sshagent(credentials: ['status-im-auto-ssh']) {
          sh 'npm run deploy'
        }
      } }
    }

    stage('Publish Devel') {
      when { expression { env.GIT_BRANCH ==~ /.*develop/ } }
      steps { script {
        sshagent(credentials: ['jenkins-ssh']) {
          sh '''
            scp -o StrictHostKeyChecking=no -r public/. \
            jenkins@node-01.do-ams3.proxy.misc.statusim.net:/var/www/dev-keycard/
          '''
        }
      } }
    }
  }
}
