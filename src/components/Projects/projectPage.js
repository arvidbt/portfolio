

export default {
  name: 'MyProjects',
  inheritAttrs: false,
  data() {
      return {
          portfolio: false,
          PBLogger: false,
          thirty: false,
          mira: false,
          antiTD: false,
          twenty48: false,
          showAll: true,
          titles: {
            PT: "This Portfolio",
            PB: "PBLogger",
            TH: "Thirty",
            TD: "Anti-TD",
            MR: "Mira",
            _48: "2048",
          },
          desc: {
            PT: "Made this portfolio as a way of practicing web development. Focus was learning the Vue framework.",
            PB: "PBLogger is an Android mobile application, used for training and logging training records.",
            TH: "Thirty is a Android mobile game, similar to Yatzy.",
            TD: "AntiTD is a project made in Java with 3 other students. It's a twist to the classic TD games, where you reverse the roles of attacker.",
            MR: "Mira is a CRUD site I made with my friend Tomas Diaz. Purpose was learning to create a REST-api.",
            _48: "2048 is not the most pretty nor bugfree program out there, but it's my first project and has a special place in my heart.",
          },
          tools: {
            PT: "Tools used: Vue.JS, CSS3, HTML5, Netlify",
            PB: "Tools used: Figma, Android Studio, Kotlin'",
            TH: "Tools used: Figma, Android Studio, Kotlin",
            TD: "Tools used: Java, Swing",
            MR: "Tools used: JavaScript, HTML5, CSS3, Axios, Express, SQLite",
            _48: "Tools used: Java, Swing",
          },
          links: {
            PT: 'https://github.com/arvidbt/portfolio',
            PB: 'https://github.com/arvidbt/PBLogger',
            TH: 'https://github.com/arvidbt/',
            TD: 'https://github.com/arvidbt/',
            MR: 'https://github.com/arvidbt/mira',
            _48: 'https://github.com/arvidbt/2048',
          }
      }
  },
  methods: {
      portfolioSelected() {
        this.portfolio = !this.portfolio;
        if(this.portfolio) {
          this.PBLogger = false;
          this.thirty = false;
          this.mira = false;
          this.antiTD = false;
          this.twenty48 = false;
          this.showAll = false;
        } else {
          this.showAll = true;
        }
      },
      pbloggerSelected() {
        this.PBLogger = !this.PBLogger;
        if(this.PBLogger) {
          this.portfolio = false;
          this.design = false;
          this.mira = false;
          this.antiTD = false;
          this.twenty48 = false;
          this.showAll = false;
        } else {
          this.showAll = true;
        }
      },
      thirtySelected() {
        this.thirty = !this.thirty;
        if(this.thirty) {
          this.PBLogger = false;
          this.portfolio = false;
          this.mira = false;
          this.antiTD = false;
          this.twenty48 = false;
          this.showAll = false;
        } else {
          this.showAll = true;
        }
      },
      miraSelected() {
        this.mira = !this.mira;
        if(this.mira) {
          this.PBLogger = false;
          this.thirty = false;
          this.portfolio = false;
          this.antiTD = false;
          this.twenty48 = false;
          this.showAll = false;
        } else {
          this.showAll = true;
        }
      },
      antiTDSelected() {
        this.antiTD = !this.antiTD;
        if(this.antiTD) {
          this.PBLogger = false;
          this.thirty = false;
          this.portfolio = false;
          this.mira = false;
          this.twenty48 = false;
          this.showAll = false;
        } else {
          this.showAll = true;
        }
      },
      twenty48Selected() {
        this.twenty48 = !this.twenty48;
        if(this.twenty48) {
          this.PBLogger = false;
          this.thirty = false;
          this.portfolio = false;
          this.antiTD = false;
          this.mira = false;
          this.showAll = false;
        } else {
          this.showAll = true;
        }
      },
      getString(comparable, title_1, title_2) {
        return  comparable ?
        title_1
        :
        title_2;
      },
      linkTo(comparable, link_1, link_2) {
        comparable ?
        window.open(link_1, '_blank').focus()
        :
        window.open(link_2, '_blank').focus();
      },
      isHighlighted(type) {
        if(this.showAll) return true;
        return type;
      },
  }
}
