import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  public readonly skills: Skill[] = [
    { text: 'JavaScript', yearsOfExperience: 3, color: 'orange' },
    { text: 'TypeScript', yearsOfExperience: 2, color: 'blue' },
    { text: 'Front-end development', yearsOfExperience: 4, color: 'blue' },
    { text: 'Responsive Web Design', yearsOfExperience: 1, color: 'blue2' },
    { text: 'OOP', yearsOfExperience: 1, color: 'green' },
    { text: 'Scrum', yearsOfExperience: 2, color: 'violet' },
    { text: 'Kanban', yearsOfExperience: 2, color: 'violet' },
    { text: 'TDD', yearsOfExperience: 0.5, color: 'yellow' },
    { text: 'HTML', yearsOfExperience: 2, color: 'green' },
    { text: 'CSS', yearsOfExperience: 2, color: 'violet' },
    { text: 'RxJs', yearsOfExperience: 2, color: 'red' },
    { text: 'Angular Material', yearsOfExperience: 0.5, color: 'orange' },
    { text: 'Angular', yearsOfExperience: 2, color: 'red' },
    { text: 'AngularJS', yearsOfExperience: 1, color: 'red' },
    { text: 'D3.js', yearsOfExperience: 2, color: 'orange' },
    { text: 'NgRx', yearsOfExperience: 2, color: 'red' },
    { text: 'Redux.js', yearsOfExperience: 2, color: 'violet' },
    { text: 'Scss', yearsOfExperience: 2, color: 'yellow' },
    { text: 'Webpack', yearsOfExperience: 1.5, color: 'blue2' },
    { text: 'FP', yearsOfExperience: 2, color: 'yellow' },
    { text: 'GOF', yearsOfExperience: 2, color: 'orange' },
    { text: 'Jasmine', yearsOfExperience: 2, color: 'green' },
    { text: 'CI / CD', yearsOfExperience: 2, color: 'yellow' },
    { text: 'GRASP', yearsOfExperience: 2, color: 'yellow' },
    { text: 'Protractor', yearsOfExperience: 0.5, color: 'red' },
    { text: 'BDD', yearsOfExperience: 1.5, color: 'yellow' },
    { text: 'SOLID', yearsOfExperience: 1.5, color: 'blue' },
    { text: 'Hybrid Applications (AngularJs + Angular)', yearsOfExperience: 1, color: 'red' },
  ];

  public experienceSkillMap: Record<number, Skill> = {};

  constructor() {}

  public get experienceSkillMapKeys(): number[] {
    return Object.keys(this.experienceSkillMap).map(s => parseFloat(s)).sort((a, b) => b - a);;
  }

  ngOnInit() {
    const uniqueYearsOfExp: number[] = this.skills
      .map((s) => s.yearsOfExperience)
      .filter(
        (years, index, self) => self.indexOf(years) === index
      )


    this.experienceSkillMap = uniqueYearsOfExp.reduce((acc, cur) => ({
      ...acc,
      [cur]: this.skills.filter((s) => s.yearsOfExperience === cur)
    }), {});
  }
}

export interface Skill {
  text: string;
  color: string;
  yearsOfExperience: number;
}
