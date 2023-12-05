import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import * as Ariakit from "@ariakit/react";
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import { Title } from './Title';
import { Toast } from './Toast';
import '../App.scss'

const Form = () => {

  type User = {
    id: number;
    login: string;
    followers: number;
  };

  const [inputValue, setInputValue] = useState('');
  const [users, setUsers] = useState<User[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.length < 4 || inputValue === 'iseijasunow') {
      Toast();
      return;
    }
    try {
      const config = {
        headers: { Authorization: `token ${import.meta.env.VITE_API_TOKEN}` }
      };
      const response = await axios.get(`https://api.github.com/search/users?q=${inputValue}`, config);
      const userDetailsPromises = response.data.items.slice(0, 10).map((user: { url: string; }) =>
        axios.get(user.url, config)
      );
      const userDetailsResponses = await Promise.all(userDetailsPromises);
      const userDetails = userDetailsResponses.map(response => response.data);
      setUsers(userDetails as any);
    } catch (error) {
      console.error(error);
    }
  };

  const data = users.map(user => ({ name: user.login, followers: user.followers }));

  return (
    <div>
      <Title />
      <form onSubmit={handleSubmit}>
        <Ariakit.ComboboxProvider>
          <Ariakit.Combobox className="combobox" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          <Ariakit.ComboboxPopover gutter={4} sameWidth className="popover">
            <Ariakit.ComboboxItem className="combobox-item" value="miguelgargallo" onClick={() => setInputValue("miguelgargallo")}>
              <IconArrowRight color="green" size={24} className="icon" />
              miguelgargallo
            </Ariakit.ComboboxItem>
            <Ariakit.ComboboxItem className="combobox-item" value="iseijasunow" onClick={() => setInputValue("iseijasunow")}>
              <IconArrowLeft color="red" size={24} className="icon" />
              iseijasunow
            </Ariakit.ComboboxItem>
            <Ariakit.ComboboxItem className="combobox-item" value="miguel" onClick={() => setInputValue("miguel")}>
              <IconArrowRight color="green" size={24} className="icon" />
              miguel
            </Ariakit.ComboboxItem>
          </Ariakit.ComboboxPopover>
        </Ariakit.ComboboxProvider>
        {inputValue.length >= 4 && <button type="submit">Search</button>}
      </form>
      <br />
      {users.length > 0 && (
        <div className="bar-chart-container">
          <BarChart width={500} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="followers" fill="#8884d8" />
          </BarChart>
        </div>
      )}
      <br />
      <div className="grid-cards">
        {users.map(user => (
          <div className="card" key={user.id}>
            <Link to={`/user/${user.login}`}>{user.login}</Link>
            <p>ID: {user.id}</p>
            <p>Followers: {user.followers}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Form;