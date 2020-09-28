import React from 'react';

const persons = (props) => (
  props.persons.map( (person, index) => {
      return <person
        click={()=> },
        name = {person.name},
        age = {person.age},
        key = {person.id},
        changed = {} />
  } )
);