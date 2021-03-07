import { useRouter } from "next/router";

export const useBlogPostsHook = () => {
  const router: any = useRouter();

  const handleTagPageChange = (e: any, { activePage }: any) => {
    router.push({
      pathname: `/author/${router.query.author}`,
      query: { page: activePage },
    });
  };

  return {
    handleTagPageChange,
  };
};
