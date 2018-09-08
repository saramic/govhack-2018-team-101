// 8 cards
// 1) School - Michael
//    I was at school and I saw a soccer ball which took me to the local park
// 3) sport recreation - Selena
//    At the local park I saw people playing various sports
// 4) recycling - Adam
//    I saw some rubbish so I picked it up and put it into recycling
//
// 6) Aging young vs old - Adam
//    An elderly gentleman thanked me with an italian accent
//
// *) Reject - Selena
// *) Reject - Selena
//
// 2) multiculturalism - Michael
//    Italians came on the boats in 1940's data
// 7) Gender equality - Michael
//
// 5) profession - Selena
//
// 8) Indiginous - Adam
//

const storyElements = {
  storyElements: [
    {
      id: "italian-soccer",
      template: "[NAME] was walking past a soccer field, and saw people speaking Italian...",
      image: "https://media.graytvinc.com/images/810*539/soccer90.jpg",
      dataSource: {
        name: '2016 Community Profiles',
        hackerspace_id: 'https://2018.hackerspace.govhack.org/data_sets/269',
        link: 'https://www.multicultural.vic.gov.au/population-and-migration/victorias-diversity/community-profiles-2016-census',
        visualisation: 'N/A',
      },
      nextElements: [
        {
          "element": "carlton-gardens",
          "segue": "A suburb with lots of Italians is Carlton, which also has wonderful gardens"
        },
        {
          "element": "soccer-fields",
          "segue": "That reminded me of the place with the most soccer fields in Melbourne - Berwick."
        }
      ]
    },
    {
      id: "carlton-gardens",
      template: "[NAME] ",
      image: "",
      dataSource: {
        name: '',
        hackerspace_id: 'https://2018.hackerspace.govhack.org/data_sets/ ???',
        link: '',
        visualisation: 'N/A',
      },
      nextElements: [
        {
          "element": "carlton-gardens",
          "segue": "A suburb with lots of Italians is Carlton, which also has wonderful gardens"
        },
        {
          "element": "soccer-fields",
          "segue": "That reminded me of the place with the most soccer fields in Melbourne - Berwick."
        }
      ]
    },
  ]
};
