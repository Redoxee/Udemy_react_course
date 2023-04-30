import Accordion from '../components/Accordion';

function AccordionPage() {
  const items = [
    { 
      label : 'What is red?',
      content : 'a car',
    },
    { 
      label : 'What is blue?',
      content : 'a whale',
    },
    { 
      label : 'What is yellow?',
      content : 'a bee',
    }
  ];

  return <Accordion items= {items}/>;
}

export default AccordionPage;
