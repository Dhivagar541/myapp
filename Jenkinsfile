pipeline {
    agent any
    stages {
        stage('Pull Code') {
            steps {
                git 'https://github.com/Dhivagar541/myapp'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t myapp:latest .'
            }
        }
        stage('Run Container') {
            steps {
                sh 'docker stop myapp || true'
                sh 'docker rm myapp || true'
                sh 'docker run -d -p 8080:8080 --name myapp myapp:latest'
            }
        }
    }
}
