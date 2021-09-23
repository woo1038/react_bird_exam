import React from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import FollowList from "../components/FollowList";
import NicknameEditForm from "../components/NicknameEditForm";

const profile = () => {
  const followerList = [
    { nickname: "hello" },
    { nickname: "코딩" },
    { nickname: "연습" },
  ];
  const followingList = [
    { nickname: "hello" },
    { nickname: "코딩" },
    { nickname: "연습" },
  ];

  return (
    <AppLayout>
      <NicknameEditForm />
      <FollowList header="팔로잉 목록" data={followingList} />
      <FollowList header="팔로워 목록" data={followerList} />
    </AppLayout>
  );
};

export default profile;
