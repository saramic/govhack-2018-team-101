// 8 cards
// 1) School - Michael
//    I am at school
//
// 3) sport recreation - Selena
//    segue - I to play soccer at the local park
//    I am at the local park and I see
//    At the local park I saw people playing various sports

//    Kingston Heath Reserve on Farm Road, HEATHERTON 3202, Grass Soccer Field, facility is 0-5 years old, 5* rated facility, with Unisex and Umpire/Offical change rooms
//    9 soccer field locations in Kingston, 8 of which are offering grass fields

// 4) recycling - Adam
//    segue -
//    I saw some rubbish so I picked it up and put it into recycling
//
// 6) Aging young vs old - Adam
//    An elderly gentleman thanked me with an italian accent
//
// *) Reject Graffiti - Selena
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
      id: "school",
      template: "You are at Parkdale Primary School",
      image: "http://www.parkdaleps.vic.edu.au/uploaded_files/media/gallery/parkdale_primary_201527_crop.jpg",
      dataSource: {
        name: 'School Locations',
        hackerspace_id: 'https://2018.hackerspace.govhack.org/data_sets/295',
        link: 'https://www.data.vic.gov.au/data/dataset/school-locations-2018',
        visualisation: 'N/A',
      },
      nextElements: [
        {
          "element": "sport-recreation",
          "segue": "You choose to go and play soccer",
        },
      ]
    },
    {
      id: "sport-recreation",
      template: "I am playing soccer at Kingston Heath Reserve",
      image: "http://suhc.com.au/wp-content/uploads/HinHockey-1-2014.jpg",
      dataSource: {
        name: 'Sport and Recreation',
        hackerspace_id: 'https://2018.hackerspace.govhack.org/data_sets/275',
        link: 'https://www.data.vic.gov.au/data/dataset/sport-and-recreational-facilities',
        visualisation: 'N/A',
      },
      nextElements: [
        {
          "element": "recycling",
          "segue": "I see some rubbish and decide to recycle it"
        },
      ]
    },
    {
      id: "recycling",
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
    {
      id: "recycling",
      template: "You spot some soft drink cans on the ground, so you pick them up and throw them into a recycling bin nearby. You learnt at school that each tonne of aluminium recycled at the kerbside saves 17 tonnes of CO2. That's the same as planting 26 trees, or driving over 50,000km in your family car!",
      image: "",
      dataSource: {
        name: 'LCA kerbside recycling calculator',
        hackerspace_id: null,
        link: 'https://www.data.vic.gov.au/data/dataset/lca-kerbside-recycling-calculator',
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
