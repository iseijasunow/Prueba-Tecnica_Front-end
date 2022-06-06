import React, { useState } from "react";
import { Layout } from "antd";
import { Chart, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";
import { fetchData } from "../utility/fetchData";
import { fetchAsync } from "../utility/fetchAsync";
Chart.register(...registerables);

const { Content, Header } = Layout;
const API_URL = process.env.API_URL;

const UserGraphs = () => {
  let initialState = fetchData(API_URL);
  let followers = [];
  let followersAPI_URL = [];
  /*   let dataSets = []; */

  const getFirstTenUsersInfo = () => {
    if (initialState.items) {
      for (let i = 0; i < 10; i++) {
        followersAPI_URL.push({
          url: initialState.items[i].followers_url,
          name: initialState.items[i].login,
        });
      }
    }
  };

  const getDataToStore = () => {
    for (let x = 0; x < 10; x++) {
      if (followersAPI_URL[x].url) {
        const API_URL_FOLLOWERS = followersAPI_URL[x].url;
        fetchAsync(API_URL_FOLLOWERS).then((data) => {
          followers.push({
            name: followersAPI_URL[x].name,
            count: data.length,
          });
        });
      }
    }
    console.log(followers);
  };

  getFirstTenUsersInfo();
  getDataToStore();

  return (
    <Layout>
      <Content>{/*    <Bar /> */}</Content>
    </Layout>
  );
};

export default UserGraphs;
