import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';

import asyncBotImg from '@/public/KubernetesNew.jpeg';
import microservices from '@/public/microservices.jpg';
import hrImg from '@/public/aws.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'DevOps Engineer',
    location: 'Asis Elektronik',
    logo: '/logos/asis-logo.png',
    description:
      'Managing and maintaining Kubernetes clusters in production environments. Building and optimizing GitLab CI/CD pipelines for automated build, test, and deployment workflows. Containerizing applications with Docker and orchestrating multi-service environments using Docker Compose. Integrating SonarQube for static code analysis and enforcing code quality gates. Managing artifact repositories with Nexus and Harbor for secure image storage and distribution. Working with a broad DevOps toolchain to streamline infrastructure operations and improve deployment reliability.',
    descriptionTR:
      'Üretim ortamlarında Kubernetes cluster yönetimi ve bakım süreçlerini yürütme. Otomatik build, test ve deployment iş akışları için GitLab CI/CD pipeline kurma ve optimize etme. Uygulamaları Docker ile konteynerleştirme ve Docker Compose kullanarak çok servisli ortamları orkestre etme. Statik kod analizi için SonarQube entegrasyonu ve kod kalite kapılarını zorunlu kılma. Güvenli image depolama ve dağıtım için Nexus ve Harbor ile artifact repository yönetimi. Altyapı operasyonlarını iyileştirmek ve deployment güvenilirliğini artırmak amacıyla geniş bir DevOps araç seti ile çalışma.',
    icon: React.createElement(CgWorkAlt),
    date: 'September 2025 – Present',
    dateTR: 'Eylül 2025 – Halen',
  },
  {
    title: 'DevOps Engineer',
    location: 'Akım Metal R&D Center',
    logo: '/logos/akimmetal-logo.png',
    description:
      'Experience with troubleshooting and debugging Docker containers. Implemented continuous integration and continuous delivery (CI/CD) pipelines using Jenkins and other tools, resulting in a 40% improvement in release velocity. Experienced in installing, configuring, and updating Nginx. Effectively configured Nginx to improve the performance of web servers. Used Grafana to visualize Prometheus metrics, resulting in a 50% reduction in the time required to identify and resolve performance issues.',
    descriptionTR:
      'Docker container sorun giderme ve hata ayıklama konusunda deneyim. Jenkins ve diğer araçlarla CI/CD pipeline uygulandı; yayın hızı %40 oranında iyileştirildi. Nginx kurulum, yapılandırma ve güncelleme konusunda deneyimli. Web sunucusu performansını artırmak için Nginx etkin şekilde yapılandırıldı. Prometheus metriklerini görselleştirmek için Grafana kullanıldı; performans sorunlarını tespit etme ve çözme süresi %50 azaltıldı.',
    icon: React.createElement(CgWorkAlt),
    date: 'May 2024 – August 2025',
    dateTR: 'Mayıs 2024 – Ağustos 2025',
  },
  {
    title: 'AWS & DevOps Engineer',
    location: 'Upwork',
    logo: '/logos/upwork-logo.png',
    description:
      'Various hands-on and project experience with all mentioned DevOps tools as well as in-depth training on AWS as a cloud technology. Developed and maintained custom Terraform modules and plugins, resulting in a 25% improvement in infrastructure management efficiency. Including networking experience with container orchestration, scaling, and Kubernetes. Hands-on experience creating and managing pods, services, deployments, and helm. Designed and implemented Ansible-based disaster recovery solutions.',
    descriptionTR:
      'Tüm DevOps araçlarıyla çeşitli pratik ve proje deneyiminin yanı sıra AWS bulut teknolojisi üzerine kapsamlı eğitim. Özel Terraform modülleri geliştirip sürdürüldü; altyapı yönetimi verimliliği %25 iyileştirildi. Container orkestrasyon, ölçeklendirme ve Kubernetes ile ağ kurma deneyimi. Pod, servis, deployment ve helm oluşturma ve yönetme konusunda pratik deneyim. Ansible tabanlı felaket kurtarma çözümleri tasarlanıp hayata geçirildi.',
    icon: React.createElement(CgWorkAlt),
    date: 'June 2023 – March 2024',
    dateTR: 'Haziran 2023 – Mart 2024',
  },
] as const;

export const projectsData = [
  {
    title: 'Kubernetes Project',
    description:
      'Developed a web application with Docker and Kubernetes, integrating a MySQL database. Created frontend and backend services managed by Kubernetes deployments. Utilized persistent volume and persistent volume claim for data preservation.',
    descriptionTR:
      'Docker ve Kubernetes kullanılarak MySQL veritabanı entegre edilmiş bir web uygulaması geliştirildi. Kubernetes deployment tarafından yönetilen frontend ve backend servisleri oluşturuldu. Veri kalıcılığı için Persistent Volume ve Persistent Volume Claim kullanıldı.',
    tags: ['Kubernetes', 'Docker', 'MySQL', 'Persistent Volume', 'Backend', 'Frontend'],
    imageUrl: asyncBotImg,
  },
  {
    title: 'AWS Infrastructure Project',
    description:
      'Built an infrastructure with an Application Load Balancer, Auto Scaling Group of EC2 Instances, and RDS on a defined VPC. Integrated CloudFront and Route 53 for secure traffic management. Developed a blog platform with image and video uploads stored on S3 Bucket, ensuring scalability and reliability.',
    descriptionTR:
      'Tanımlı bir VPC üzerinde Application Load Balancer, Auto Scaling Group EC2 Instance ve RDS içeren bir altyapı kuruldu. Güvenli trafik yönetimi için CloudFront ve Route 53 entegre edildi. Görsel ve video yüklemelerinin S3 Bucket\'ta depolandığı, ölçeklenebilir ve güvenilir bir blog platformu geliştirildi.',
    tags: ['AWS', 'EC2', 'RDS', 'S3', 'CloudFront', 'Route 53', 'Infrastructure'],
    imageUrl: hrImg,
  },
  {
    title: 'Capstone Project',
    description:
      'Developed robust backend services in Java with Spring Boot for core business logic. Designed and implemented a CI/CD pipeline using Jenkins, facilitating seamless build, test, and deployment processes. Automated infrastructure provisioning with Terraform and implemented a scalable container orchestration platform using Kubernetes for efficient microservices deployment.',
    descriptionTR:
      'Temel iş mantığı için Java ve Spring Boot ile güçlü backend servisleri geliştirildi. Jenkins kullanılarak kesintisiz build, test ve deployment süreçlerini sağlayan bir CI/CD pipeline tasarlanıp hayata geçirildi. Terraform ile altyapı otomasyonu sağlandı ve verimli mikroservis deployment\'ı için Kubernetes tabanlı ölçeklenebilir bir container orkestrasyon platformu oluşturuldu.',
    tags: ['Java', 'Spring Boot', 'Kubernetes', 'Jenkins', 'Terraform', 'CI/CD'],
    imageUrl: microservices,
  },
] as const;

export const skillsData = [
  'AWS Cloud',
  'AI',
  'Kubernetes',
  'Terraform',
  'Ansible',
  'Docker',
  'Jenkins',
  'GitLab',
  'ELK',
  'Prometheus',
  'Grafana',
  'Nexus',
  'Harbor',
  'Maven',
  'Nuget',
  'Python',
  'JAVA',
  'Linux',
  'Bash',
  'Git',
] as const;
