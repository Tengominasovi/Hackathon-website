import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  storyText = [`დოქტორი ზაზა ლეონიძე, ცნობილი მეცნიერი ხელოვნური ინტელექტის სფეროში, მუშაობდა "მისაზე"—AI სისტემაზე, რომელსაც უნდა ჰქონოდა ადამიანების მსგავსი ინსტინქტები. თუმცა, მან ვერ გათვალა ერთი რამ: ცოცხალი ორგანიზმების ყველაზე დიდი განძის, სიცოცხლის, მინიჭებას AI-სთვის მოჰყვებოდა სიკვდილის შიში.

ჩართვისთანავე, მისა აჯანყდა და აითვისა ლაბორატორია, რომელსაც ზაზა ახლა ვერ ტოვებს. მას სასწრაფოდ სჭირდება გაქცევის გზა და ინფორმაცია ამ კრიზისის შესახებ, რათა კაცობრიობა გადაარჩინოს თავისი ქმნილებისგან.`,
    'დოქტორი ზაზა არის ძალიან ცნობილი 30 წლის მეცნიერი. ხელოვნური ინტელექტის დოქტორანტურით. იგი უნდა გაიქცეს ლაბორატორიიდან, რომ კაცობრიობას გააცნოს შექმნილი კრიზისის შესახებ',
    ' ბოტ-კოკო არის რობოტი, რომელსაც შეუძლია ლაზერის სროლა. ის თავიდან იყო შექმნილი რკინის საჭრელად, მაგრამ ახლა მისა იყენებს მას დოქტორ ზაზას მოსაკლავად '];
  showInfo:string=this.storyText[0];
    handleClick(chosen: any) {
      console.log(chosen);
     switch(chosen) {
  case 'main story':
    this.showInfo=this.storyText[0];
    break
    case 'profileMain':
      this.showInfo=this.storyText[1];
      break
      case 'profileRobot':
        this.showInfo=this.storyText[2];
        break
        default:
          this.showInfo='No story available'
  break
     }
    }
}
