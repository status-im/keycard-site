#!/usr/bin/env groovy
library 'status-jenkins-lib@v1.8.8'

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
    GIT_COMMITTER_NAME = 'status-im-auto'
    GIT_COMMITTER_EMAIL = 'auto@status.im'
  }

  stages {
    stage('Install') {
      steps {
        sh 'yarn install --ignore-optional'
      }
    }

    stage('Build') {
      steps { script {
        sh 'yarn build'
        jenkins.genBuildMetaJSON('public/build.json')
      } }
    }

    stage('Publish') {
      steps {
        sshagent(credentials: ['status-im-auto-ssh']) {
          sh "ghp-import -b ${deployBranch()} -p public"
        }
      }
    }

  }

  post {
    cleanup { cleanWs() }
  }
}

def deployBranch() {
  GIT_BRANCH ==~ /.*master/ ? 'deploy-master' : 'deploy-develop'
}
