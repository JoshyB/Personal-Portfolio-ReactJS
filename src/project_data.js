const projects = {
  rcollins: {
    name: "Rebecca Collins Therapy",
    website: "rcollinstherapy.com",
    images: ["/images/rcollinsSite.jpg"],
    description:
      "A website for a Mental Health and Sex Therapist in Columbus, Ohio",
    tools: "Node, Express, Pug/Jade",
    about:
      "I built this website for a Sex Therapist here in Columbus, Ohio. She wanted a site where visitors could learn about how sex therapy works and what to expect from it. As well as an easy way for current and potential clients to get in contact with her and download admission and billing forms, view her rates and types of insurance she accepts. The client expressed interest in adding other features to the site at a later date, such as a blog, and possibly a payment option for those who are paying out of pocket for services. I chose Node, and Express with the idea that it would be easier to build and incorporate those features at a later time."
  },
  cbusparks: {
    name: "cbusparks",
    website: "cbusparks.fun",
    images: ["/images/cbusparks1.jpg"],
    description:
      "Cbusparks is a full stack web application that allows people to view, add, edit, upload photos and review parks and playgrounds in the Columbus, Ohio area",
    tools: "Node, Express, Pug/Jade, MongoDB",
    about:
      "cbusparks.fun is a personal project of mine. As the father of a toddler, we visit a decent amount of parks and playgrounds on a weekly basis. And while the Columbus Parks and Recreation website is a great source of information, I decided that I would like to have just a little more information. I built it with the idea that people visiting the site could register, login, add, edit parks and upload photos of the parks they have visited as well as leave comments about parks in the database that other people have added. While adding a park, users can select various features the park may have, such as if there are bathrooms or not, is it shady? is there a basketball court? or a picnic area? You can find all this information on cbusparks.fun."
  },
  homeglow: {
    name: "Homeglow Imaging",
    website: "homeglowimaging.com",
    images: ["/images/homeglow.jpg"],
    description:
      "Website for a local Real Estate Photography company operating in and around the Columbus, Ohio area.",
    tools: "Javascript, HTML, Bulma(CSS Framework), PHP",
    about:
      "Homeglow Imaging needed a website for marketing and a way for customers to easily get into contact with them. The client had a tight budget and timeframe so I reached for the Bulma CSS framework to quickly prototype and build out a working website. PHP was used to take care of the scheduling and contact forms."
  }
};

module.exports = projects;
