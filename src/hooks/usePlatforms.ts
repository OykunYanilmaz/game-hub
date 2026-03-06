// import useData from "./useData";

import platforms from "../data/platforms";

// NOTE: We will see the behaviour after commenting this block.
// interface Platform {
//     id: number;
//     name: string;
//     slug: string;
// }

// const usePlatforms = () => useData<Platform>('/platforms/lists/parents');
const usePlatforms = () => ({ data: platforms, error: null, isLoading: false });

export default usePlatforms;