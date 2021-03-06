export default [
  {
    img: 'https://assets.franklinjeng.com/projects/twinePreview.png',
    title: 'Twine',
    blurb: 'Browser-based word processor powered with Git',
    github: 'https://github.com/franklinjjeng/twine',
    link: 'N/A',
    description:
      'The mission of this project was to create a simple easy to use word processor online that allows for collaboration for larger projects with the power of Git. Git is a great tool, but can be intimidating to use for non-technical users. Twine abstracts away the complexity of it to create an easy user experience.',
    contribution:
      'I built the front end structure for the application, creating the structure of each component and the core functionality. I also stitched the components together creating a page flow when traversing through the application as well as the API calls from the front end and the back end. I coordinated with the backend routes to ensure the what information was needed to be passed to and from the front end.',
    challenges:
      'The biggest challenge we faced was working with the WYSIWYG, DraftJS. The method DraftJS stores the element tags and formatting would not always carry over. This would cause issues when determining if there were changes to the document itself. After some testing, we were able to determine the formatting changes that would remain unchanged.'
  },
  {
    img: 'https://assets.franklinjeng.com/projects/divvyPreview2.png',
    title: 'Divvy',
    blurb: 'Restaurant bills split intelligently with everyone',
    github: 'https://github.com/franklinjjeng/artisanalaioli',
    link: 'N/A',
    description:
      'An intelligent bill splitting app allowing you to record the dishes and split the order based on what each individual person ate. The application also stores your receipt providing you with a history.',
    contribution:
      'The goal of this project was to take on an existing code base and improve it. I refactored all the existing front end architecture. Cleaning out unused lines of code as well as modifying it for readability. The location of where the data was stored was better organized to allow different components access to the same information and preventing it from being lost moving from page to page. A new receipt scanner was implemented and I created an algorithm to add the data from the receipt to the app itself.',
    challenges: 'the challenges'
  },
  {
    img: 'https://assets.franklinjeng.com/projects/healthwarsPreview.png',
    title: 'HealthWars',
    blurb: 'Exercise made fun and competitive',
    github: 'https://github.com/franklinjjeng/HealthWars',
    link: 'N/A',
    description:
      'Healthwars was based on an exercise competition. Every week there would be an exercise assigned that will give you points. The person with the most points will win a prize. The app was created to digitize and better track the achievements and exercises done.',
    contribution:
      'I created and maintained the project structure to streamline organization and flow of the development process. I built front end components to allow users to track their progress on their exercises within the profile as well as components to log exercise information. Created the API calls to the backend to pull as well as store information on the database.',
    challenges: 'the challenges'
  },
  {
    img: 'https://assets.franklinjeng.com/projects/tactictoePreview.png',
    title: 'Tactic Toe',
    blurb: 'Tic-Tac-Toe with only 3 active pieces',
    github: 'https://github.com/franklinjjeng/tactic_toe',
    link: 'N/A',
    description:
      'Tic-Tac-Toe with a twist only allowing its users 3 active pieces at a time. The oldest piece placed will disappear after three pieces are already on the board. You cannot click on an existing piece to "refresh" the piece and you need to use the 3 active pieces to win.',
    contribution:
      'This was my first full stack application I built by myself and some of my earlier work. Making the code base, not my finest work in terms of best practices and organization. This is currently being revisited and getting refactored as well as stylized.',
    challenges: 'the challenges'
  }
];
