import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import BotSpecs from './BotSpecs';

function App() {
  const [bots, setBots] = useState([]);
  const [enlistedBots, setEnlistedBots] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/bots')
      .then(response => response.json())
      .then(data => setBots(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const enlistBot = (bot) => {
    if (!enlistedBots.some(enlistedBot => enlistedBot.id === bot.id)) {
      setEnlistedBots([...enlistedBots, bot]);
    }
  };

  const releaseBot = (botId) => {
    setEnlistedBots(enlistedBots.filter(bot => bot.id !== botId));
  };

  const dischargeBot = (botId) => {
    // Remove bot from backend (optional)
    fetch(`http://localhost:3000/bots/${botId}`, { method: 'DELETE' })
      .then(response => {
        if (response.ok) {
          setEnlistedBots(enlistedBots.filter(bot => bot.id !== botId));
        } else {
          console.error('Error deleting bot from backend');
        }
      })
      .catch(error => console.error('Error deleting bot:', error));
  };

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/bots/:botId">
            <BotSpecs bots={bots} enlistBot={enlistBot} />
          </Route>
          <Route path="/">
            <BotCollection
              bots={bots}
              enlistedBots={enlistedBots}
              enlistBot={enlistBot}
              dischargeBot={dischargeBot}
            />
            <YourBotArmy enlistedBots={enlistedBots} releaseBot={releaseBot} dischargeBot={dischargeBot} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
