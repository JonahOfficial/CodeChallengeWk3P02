import React from 'react';
import { useParams } from 'react-router-dom';

const BotSpecs = ({ bots, enlistBot }) => {
  const { botId } = useParams();
  const bot = bots.find(bot => bot.id === parseInt(botId));

  return (
    <div>
      <h2>{bot.name} Specs</h2>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <button onClick={() => enlistBot(bot)}>Enlist</button>
    </div>
  );
};

export default BotSpecs;
