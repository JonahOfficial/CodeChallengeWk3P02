import React from 'react';

const YourBotArmy = ({ enlistedBots, releaseBot, dischargeBot }) => {
  return (
    <div>
      <h2>Your Bot Army</h2>
      {enlistedBots.map(bot => (
        <div key={bot.id}>
          <h3>{bot.name}</h3>
          <p>Health: {bot.health}</p>
          <p>Damage: {bot.damage}</p>
          <p>Armor: {bot.armor}</p>
          <button onClick={() => releaseBot(bot.id)}>Release</button>
          <button onClick={() => dischargeBot(bot.id)}>Discharge</button>
        </div>
      ))}
    </div>
  );
};

export default YourBotArmy;
