import { FC } from 'react';
import { Button } from '../../components/Button';
import { ChoiceInput } from '../../components/form/ChoiceInput';
import { Choice } from '../../components/form/form.types';
import { TextAreaInput } from '../../components/form/TextAreaInput';
import { Card } from '../../components/card/Card';
import { CardSection } from '../../components/card/CardSection';
import { FoodChoice } from '../../utils/rsvp.types';
import { FormCardProps } from './rsvpForm.types';

const foodChoices: Choice<FoodChoice>[] = [
  {
    label: 'No interest',
    value: FoodChoice.BAD
  },
  {
    label: 'Would be interested to try',
    value: FoodChoice.OKAY
  },
  {
    label: 'Would be my first choice',
    value: FoodChoice.GOOD
  }
];

const potatoChoices: Choice<number>[] = [
  {
    label: 'Strongly prefer dauphinois',
    value: 1
  },
  {
    label: 'Slighty prefer dauphinois',
    value: 3
  },
  {
    label: "That's a difficult question to answer",
    value: 5
  },
  {
    label: 'Slightly prefer roast',
    value: 7
  },
  {
    label: 'Strongly prefer roast',
    value: 9
  },
  {
    label: 'Why are you asking me about potatoes?',
    value: 0
  }
];

export const FoodInfo: FC<FormCardProps> = ({ responses, setResponses, onComplete, onBack }) => {
  const setDiet = (diet: string) => {
    setResponses({ ...responses, dietaryRequirements: diet });
  };

  const setBeef = (beef: FoodChoice) => {
    setResponses({ ...responses, beef });
  };

  const setChicken = (chicken: FoodChoice) => {
    setResponses({ ...responses, chicken });
  };

  const setVeggie = (veggie: FoodChoice) => {
    setResponses({ ...responses, veggie });
  };

  const setPotatoes = (potatoes: number) => {
    setResponses({ ...responses, potatoes });
  };

  return (
    <Card title="Food Choices">
      <TextAreaInput
        name="Do you have any strict dietary requirements?"
        description="eg. allergies and intolerances, religious restrictions, etc."
        value={responses.dietaryRequirements}
        onChange={setDiet}
      />
      <CardSection title="Saturday Evening Meal">
        <div>
          For the Saturday evening, we're planning a buffet style meal. People will get to try a few different things,
          and there should be something for everyone.
        </div>
        <div>
          We'd like to get people's thoughts on what appeals most to them, to make sure we order the right amounts.
        </div>
        <div>
          How would you feel about the following main course dishes? There will also be a selection of side dishes, and
          canapes earlier in the evening.
        </div>
        <ChoiceInput
          name="Roast Beef with Yorkshire Puddings"
          choices={foodChoices}
          value={responses.beef}
          onChange={setBeef}
          grid
        />
        <ChoiceInput
          name="Chicken Supreme"
          choices={foodChoices}
          value={responses.chicken}
          onChange={setChicken}
          grid
        />
        <ChoiceInput
          name="Vegan Lentil and Beetroot Wellington"
          choices={foodChoices}
          value={responses.veggie}
          onChange={setVeggie}
          grid
        />
        <ChoiceInput
          name="Help us decide which potatoes to get! Roast or dauphinois?"
          choices={potatoChoices}
          value={responses.potatoes}
          onChange={setPotatoes}
        />
      </CardSection>
      <div className="flex justify-between">
        <Button onClick={onBack}>Back</Button>
        <Button onClick={onComplete}>Submit</Button>
      </div>
    </Card>
  );
};
