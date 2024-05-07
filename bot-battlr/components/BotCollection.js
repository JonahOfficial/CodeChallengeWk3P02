import React from 'react';

const BotCollection = ({ bots, enlistedBots, enlistBot, dischargeBot }) => {
  return (
    <div>
      <h2>Available Bots</h2>
      {bots.map(bot => (
        <div key={bot.id}>
          <h3>{bot.name}</h3>
          <p>Health: {bot.health}</p>
          <p>Damage: {bot.damage}</p>
          <p>Armor: {bot.armor}</p>
          {!enlistedBots.some(enlistedBot => enlistedBot.id === bot.id) ? (
            <button onClick={() => enlistBot(bot)}>Enlist</button>
          ) : (
            <button onClick={() => dischargeBot(bot.id)}>Discharge</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default BotCollection;
