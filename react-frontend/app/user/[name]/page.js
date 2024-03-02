"use client";
import Card from "@/app/components/user/Card";
import Header from "@/app/components/user/Header";
import { useParams } from "next/navigation";
import useFetchUserDetail from "@/app/hooks/useFetchUserDetail";
import Error from "../../components/Error";

export default function UserPage() {
  const { name } = useParams();
  const { data, loading, error } = useFetchUserDetail(name);
  return (
    <>
      <Header name={name} loading={loading} error={error} />
      <Card data={data} loading={loading} error={error} />
    </>
  );
}
