import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { CTF, Project } from 'src/models';
import { Skill } from '../model';

@Injectable({ providedIn: 'root' })
export class ProjectService {
  webProjects: Project[] = [
    {
      name: 'Marvel  Explorer',
      description:
        'This project provides a platform where you can explore a vast collection of Marvel characters and movies. Dive into the Marvel Universe and discover the iconic heroes and thrilling cinematic adventures that have captivated fans worldwide.',
      link: 'https://victorious-coast-002571910.5.azurestaticapps.net',
      image: 'assets/marvel_project.png',
    },
    {
      name: 'Animal Kingdom',
      description:
        'The Animal Kingdom Explorer is a project designed to help you explore and learn about various types of animals, classified as herbivores, carnivores, and omnivores. Immerse yourself in the world of the animal kingdom, discovering their unique characteristics and dietary preferences.',
      link: 'https://agreeable-smoke-0732c9910.5.azurestaticapps.net',
      image: 'assets/animals_project.png',
    },
  ];
  pentestProjects: Project[] = [
    {
      name: 'Active Directory Ovawatch',
      description:
        'The tool allows users to authenticate with a target domain using either usernames and passwords or NTLM hashes, and it provides a wide range of enumeration options to gather information about domain users, services, and vulnerabilities. It can also assist with cracking password hashes and extracting sensitive information for further exploitation.',
      link: 'https://github.com/TheBlxckCicada/AD-Ovawatch',
      image: 'assets/videos/cicada_mastertul.mp4',
    },
  ];
  ctfProjects: CTF[] = [
    {
      name: 'Cicada',
      description:
        'A Hack The Box approved and hosted Active Directory CTF that allows an individual to practice their AD exploitation techniques.',
      link: 'https://app.hackthebox.com/machines/Cicada',
      image: 'assets/cicada_ctf2.png',
    },
    {
      name: 'The Originals',
      description:
        "A Try Hack Me private hosted Active Directory CTF inspired by the show 'The Originals'. ",
      link: 'https://tryhackme.com/jr/theoriginals',
      image: 'assets/theoriginals_ctf.png',
    },
    {
      name: 'Blind Spot',
      description:
        'A Try Hack Me private Linux hosted CTF.The FBI finds a mysterious tattooed woman in Times Square with no memory of her identity. As she tries to uncover her past, her tattoos are found to contain clues alluding to a criminal conspiracy.',
      link: 'https://tryhackme.com/jr/blindspot',
      image: 'assets/blindspot_ctf.png',
    },
    {
      name: 'Supernatural',
      description:
        'A Try Hack Me private Windows AD hosted CTF.Players will begin by learning essential enumeration techniques to identify valuable information such as plaintext credentials stored in files. As they progress, they will encounter tasks requiring Kerberoasting to extract and crack service account.',
      link: 'https://tryhackme.com/jr/supernatural',
      image: 'assets/supernatural.png',
    },
  ];

  skills: Skill[] = [
    {
      icon: 'assets/osint-skill.jpg',
      text: 'Open Source Intelligence | OSINT',
      isCertification: false,
    },
    {
      icon: 'assets/network-pentest.jpg',
      text: 'Network Pentest | Active Directory',
      isCertification: false,
    },
    {
      icon: 'assets/cloud-pentest.jpg',
      text: 'Cloud Pentest | Azure, AWS, GCP',
      isCertification: false,
    },
    {
      icon: 'assets/azure-icon.png',
      text: 'Azure Cloud Development',
      isCertification: false,
    },
    {
      icon: 'assets/dotnet-icon.png',
      text: 'C# - Asp.Net Core| Rest API development',
      isCertification: false,
    },
    {
      icon: 'assets/integration.png',
      text: 'CI/CD Integration | Azure DevOps',
      isCertification: false,
    },
    {
      icon: 'assets/angular.svg',
      text: 'Angular | Frontend  Development',
      isCertification: false,
    },

    {
      icon: 'assets/python.png',
      text: 'Python Scripting',
      isCertification: false,
    },

    {
      icon: 'assets/pjpt.png',
      text: 'Practical Junior Penetration Tester',
      isCertification: true,
      certLink:
        'https://www.credential.net/0addc8a4-67a1-4f5b-a5bf-0dd5b62caca9?key=a3767678ea409fef101b140fffaca95c0a7453d1c36a803a94a1f6d4b1f5c36e#acc.H0vW5mzq',
    },
    {
      icon: 'assets/PNPT.png',
      text: 'Practical Network Penetration Tester',
      isCertification: true,
      certLink:
        'https://certified.tcm-sec.com/19b79e05-95f3-44e8-8560-88d2228237ea#acc.R8UeyoPs',
    },
    {
      icon: 'assets/dev-associate.png',
      text: 'Microsoft Azure Developer',
      isCertification: true,
      certLink:
        'https://www.credly.com/badges/7a044e9a-4e62-4320-b3c8-08b060d6e437/linked_in_profile',
    },
    {
      icon: 'assets/devops.png',
      text: 'Microsoft Azure DevOps Engineer',
      isCertification: true,
      certLink:
        'https://www.credly.com/badges/5e1c85c0-213e-4684-a3c3-8abe8585f663/linked_in_profile',
    },
  ];

  getPentestProjects() {
    return of(this.pentestProjects);
  }

  getWebProjects() {
    return of(this.webProjects);
  }

  getSkills() {
    return of(this.skills);
  }
  getCTFs() {
    return of(this.ctfProjects);
  }
}
