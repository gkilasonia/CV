import React, { useState } from "react";
import "./CV.css";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import avatar from "../../src/images/pictures/avatar.jpg";
import about from "../../src/images/icons/About.png";
import education from "../../src/images/icons/Education.png";
import experience from "../../src/images/icons/Experience.png";
import skills from "../../src/images/icons/Skills.png";
import contacts from "../../src/images/icons/Contacts.png";
import goBack from "../../src/images/icons/goback.png";
import gobackHidden from "../../src/images/icons/gobackHidden.png";
import menu from "../../src/images/icons/Menu.png";
import up from "../../src/images/icons/Up.png";
import Education from "../../src/components/Education.jsx";
import "../../src/components/Education.css";
import Experience from "../../src/components/Experience.jsx";
import "../../src/components/Experience.css";
import SkillBar from "../components/SkillBar.jsx";
import "../../src/components/SkillBar.css";

import Contacts from "../../src/components/Contacts.jsx";

const CV = () => {
  const [isHidden, setIsHidden] = useState(false);

  const navigate = useNavigate();
  const goBackToHome = () => {
    navigate("/");
  };
  const goToSkills = () => {
    navigate("/skills");
  };

  return (
    <main>
      {isHidden ? (
        <aside style={{ width: "55px" }}>
          <Avatar
            className="avatar"
            alt="My avatar"
            src={avatar}
            sx={{ width: 40, height: 40 }}
          />
          <a className="aside-about" href="#header">
            <img src={about} alt="About me icon" />
          </a>
          <a className="aside-education" href="#education">
            <img src={education} alt="Education icon" />
          </a>
          <a className="aside-experience" href="#experience">
            <img src={experience} alt="Experience icon" />
          </a>
          <a className="aside-skills" href="#skills">
            <img src={skills} alt="Skills icon" />
          </a>
          <a className="aside-contacts" href="#contacts">
            <img src={contacts} alt="Contacts icon" />
          </a>
          <button
            className="go-back"
            onClick={goBackToHome}
            style={{ margin: "0px 0px 0px -11px" }}
          >
            <img src={gobackHidden} alt="Go back icon" />
          </button>
          <button
            className="burger-menu"
            onClick={() => {
              setIsHidden(!isHidden);
            }}
          >
            <img src={menu} alt="Burger menu icon" />
          </button>
        </aside>
      ) : (
        <aside>
          <Avatar
            className="avatar"
            alt="My avatar"
            src={avatar}
            sx={{ width: 100, height: 100 }}
          />
          <p className="aside-name">Giorgi Kilasonia</p>
          <a className="aside-about" href="#header">
            <img src={about} alt="About me icon" />
            About me
          </a>
          <a className="aside-education" href="#education">
            <img src={education} alt="Education icon" />
            Education
          </a>
          <a className="aside-experience" href="#experience">
            <img src={experience} alt="Experience icon" />
            Experience
          </a>
          <a className="aside-skills" href="#skills">
            <img src={skills} alt="Skills icon" />
            Skills
          </a>
          <a className="aside-contacts" href="#contacts">
            <img src={contacts} alt="Contacts icon" />
            Contacts
          </a>
          <button className="go-back" onClick={goBackToHome}>
            <img src={goBack} alt="Go back icon" />
            Go Back
          </button>
          <button
            className="burger-menu"
            onClick={() => {
              setIsHidden(!isHidden);
            }}
          >
            <img src={menu} alt="Burger menu icon" />
          </button>
        </aside>
      )}
      <section className="cv-section">
        <div>
          <h2 className="header" id="header">
            About me
          </h2>
          <p className="text">
            მე გიორგი კილასონია დაბადებული 1986 წლის 2 დეკემბერს ქ. თბილისში,
            დავამთავრე 160-ე საშუალო სკოლა. სკოლის დამთავრების შემდგომ 2002 წელს
            ჩავაბარე ქ. თბილისის გეოდეზიისა და კარტოგრაფიის კოლეჯში, რომელიც
            დავამთავრე 2006 წელს აეროფოტოგეოდეზიის უმცროსი ინჟინრის
            კვალიფიკაციით. 2006 წლის 13 ივლისს გაწვეული ვიყავი სავალდებულო
            სამსახურში, სადაც მსახურის დროს მოვაწერე ხელი სამხედრო პროფესიულ
            კონტრაქტს და სავალდებულო სამსახური ჩავანცვლე პროფესიული საკონტრაქტო
            სამსახურით. ამჟამად ვმსახურობ თავდაცვის სამინისტროს, თავდაცვის
            ძალების, გენერალური შტაბის J-3 ოპერატიული დაგეგმვის დეპარტამენტის,
            გაერთიანებული სწავლებების სამმართველოს სერჟანტად. ვარ 2008 წლის
            რუსეთ-საქართველოს ომის ვეტერანი. მონაწილეობა მაქვს მიღებული
            სამშვიდობო ოპერაციაში ავღანეთის რესპუპლიკაში 2011-2012 წლებში. მყავს
            მეუღლე და ორი ქალიშვილი.
          </p>
        </div>
        <div>
          <h2 className="header" id="education">
            Education
          </h2>
          <div className="education">
            <Education
              year={2006}
              profession={"აეროფოტოგეოდეზიის უმცროსი ინჟინერი (სამოქალაქო)"}
              narative={
                "2002 წელს ჩავაბარე ქ.თბილისის გეოდეზიისა და კარტოგრაფიის კოლეჯში, რომელიც დავამთავრე 2006 წელს აეროფოტოგეოდეზიის უმცროსი ინჟინერის კვალიფიკაციით."
              }
            />
            <Education
              year={2009}
              profession={
                "ათეულის მეთაურის საგანმანათლებლო პროგრამა I დონე (სამხედრო)"
              }
              narative={
                "2008 წლის ოქტომბერში ჩავაბარე თავდაცვის სამინისტროს სერჟანტთა სკოლაში, რომელიც წარჩინებით დავამთავრე 2009 წლის თებერვალში ათეულის მეთაურის სამხედრო კვალიფიკაციით."
              }
            />
            <Education
              year={2015}
              profession={
                "ასეულის სერჟანტის საგანმანათლებლო პროგრამა II დონე (სამხედრო)"
              }
              narative={
                "2015 წლის ივლისში ჩავაბარე თავდაცვის სამინისტროს სერჟანტთა ცენტრში, რომელიც წარჩინებით დავამთავრე 2015 წლის ნოემბერში ასეულის სერჟანტის სამხედრო კვალიფიკაციით."
              }
            />
            <Education
              year={2019}
              profession={
                "სამეთაურო საშტაბო საგანმანათლებლო პროგრამა III დონე (სამხედრო)"
              }
              narative={
                "2019 წლის მარტში ჩავაბარე თავდაცვის სამინისტროს გიორგი ანწუხელიძის სახელობის სერჟანტთა აკადემიაში, რომელიც წარჩინებით დავამთავრე 2019 წლის სექტემბერში სამეთაურო საშტაბო სერჟანტის სამხედრო კვალიფიკაციით."
              }
            />
            <Education
              year={2021}
              profession={
                "მთავარი სერჟანტის საგანმანათლებლო პროგრამა IV დონე (სამხედრო)"
              }
              narative={
                "2020 წელს ჩავაბარე ა.შ.შ-ს სერჟანტთა ლიდერშიპის სრულყოფილების ცენტრში, რომელიც დავამთავრე 2021 წელს მთავარი სერჟანტის სამხედრო კვალიფიკაციით."
              }
            />
            <Education
              year={2021}
              profession={"ლიდერშიპი და პერსონალის მართვა (სამოქალაქო)"}
              narative={
                "2020 წელს მთავარი სერჟანტის საგანმანათლებლო პროგრამის პარალელურად ჩავაბარე ა.შ.შ-ს სამეთაურო საშტაბო კოლეჯში, რომელიც დავამთავრე 2021 წელს ლიდერშიპისა და პერსონალის მართვის ბაკალავრის ხარისხით."
              }
            />
          </div>
        </div>
        <div>
          <h2 className="header" id="experience">
            Experience
          </h2>
          <div className="experience">
            <Experience
              unit={"სამშვიდობო მომზადების ცენტრი"}
              years={"2007 - 2013"}
              position={"ინსტრუქტორი"}
              narative={
                "ოცეულის ზომის ქვედანაყოფის მომზადება სამშვიდობო ოპერაციისათვის ავღანეთის რესპუბლიკაში"
              }
            />
            <Experience
              unit={"ინსტრუქტორთა მომზადების კურსი"}
              years={"2013 - 2017"}
              position={"ინსტრუქტორი"}
              narative={
                "მსმენელების მომზადება ინსტრუქტორის უნარ-ჩვევების ათვისების, თეორიული და პრაქტიკული მეცადინეობის ჩატარებისა და მეცადინეობის გეგმის შედგენის თემაში."
              }
            />
            <Experience
              unit={"ინსტრუქტორთა მომზადების კურსი"}
              years={"2017 - 2019"}
              position={"კურსის ხელმძღვანელი"}
              narative={
                "კურსის დოკუმენტაციის წარმოება, სასწავლო მიზნების ჩამოყალიბება, კურიკულუმი/სილაბუსის შექმნა, სასწავლო პროცესის მართვა და კონტროლი."
              }
            />
            <Experience
              unit={"წვრთნების შეფასების ცენტრი"}
              years={"2019 - 2021"}
              position={"ცენტრის სერჟანტი"}
              narative={
                "ცენტრის პირადი შემადგენლობის განვითარება, დამკვირვებელ-მაკონტროლებლის კურსის მართვა და კონტროლი, შეფასებაზე შემოსული ქვედანაყოფის სერჟანტების შეფასება."
              }
            />
            <Experience
              unit={"ანალიზისა და ხარისხის მართვის განყოფილება"}
              years={"2021 - 2024"}
              position={"ხარისხის მართვის სერჟანტი"}
              narative={
                "ხარისხის მართვის პოლიტიკის გაწერა, სასწავლო პროცესის შედეგების კონტროლი, სტანდარტების დანერგვა და განმტკიცება."
              }
            />
            <Experience
              unit={"გენერალური შტაბი, J-3 ოპერატიული დაგეგმვის დეპარტამენტი"}
              years={"2024 - მიმდინარე"}
              position={"გაერთიანებული სწავლებების სამმართველოს სერჟანტი"}
              narative={
                "როგორც ეროვნული ასევე საერთაშორისო სწავლებების დაგეგმვა და აღსრულების კონტროლი."
              }
            />
          </div>
        </div>
        <div className="header" id="skills" onClick={goToSkills}>
          Skills
          <SkillBar />
        </div>
        <div>
          <h2 className="header" id="contacts">
            Contacts
          </h2>
          <Contacts />
        </div>
        <a className="button-up" href="#header">
          <img src={up} alt="Up icon" />
        </a>
      </section>
    </main>
  );
};

export default CV;
