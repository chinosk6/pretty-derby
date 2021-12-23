import React from "react";
import { useDidRecover } from "react-router-cache-route";
import Layout from "../../components/common/Layout.js";
import SupportDetail from "../../components/support/SupportDetail.js";

const TITLE = "支援 - 乌拉拉大胜利 - 赛马娘资料站";
const SupportDetailPage = (props) => {
  const id = props.match?.params?.id;
  document.title = TITLE;
  useDidRecover(() => {
    document.title = TITLE;
  });
  return (
    <Layout contentClass="flex flex-auto w-full flex-wrap max-w-6xl mx-auto">
      <SupportDetail id={id} />
    </Layout>
  );
};

export default SupportDetailPage;
