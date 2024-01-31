import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import BackBtn from "../../components/BackBtn/BackBtn";
import Form from "../../components/Form/Form";
import SearchList from "../../components/SearchList/SearchList";
import { searchData } from "../../api/searchApi";
import "./ResultsPage.scss";
import FollowersChart from "../../components/FollowersChart/CircularChart";

export default function Results() {
  const { searchName } = useParams();
  const [user, setUser] = useState([]);
  const [userFollowers, setUserFollowers] = useState({});

  useEffect(() => {
    searchData(searchName, setUser);
  }, [searchName]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="results-page">
        <Form />
        <SearchList searchName={searchName} user={user} userFollowers={userFollowers}/>
        <BackBtn />
      </div>
    </motion.div>
  );
}
