import { useRouter } from "next/router";

export const useBlogPostsHook = () => {
  const router = useRouter();

  const handlePageChange = (e: any, { activePage }: any) => {
    router.push({
      pathname: router.pathname,
      query: { page: activePage },
    });
  };

  // const mobileView = (e: any ) => {
  //   router.push({
  //     pathname: router.pathname,
  //     query: { page: activePage },
  //   });
  // }

  return {
    handlePageChange,
  };
};
