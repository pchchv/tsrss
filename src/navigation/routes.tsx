import { Routes as RRoutes, BrowserRouter, Route } from "react-router-dom";
import Feed from "@/pages/Feed";
import Index from "@/pages/Index";
import AllFeed from "@/pages/AllFeed";
import NotFound from "@/pages/NotFound";
import Discover from "@/pages/Discover";
import FeedCategory from "@/pages/FeedCategory";
import FeedProviderDetails from "@/pages/FeedProviderDetails";

export default function Routes() {
  return (
    <BrowserRouter>
      <RRoutes>
        <Route path="/" element={<Index/>}/>
        <Route path="/feed/all" element={<AllFeed/>}/>
        <Route path="/discover/:category" element={<FeedCategory/>}/>
        <Route path="/discover" element={<Discover/>}/>
        <Route path="/provider/:id" element={<FeedProviderDetails/>}/>
        <Route path="/feed/:id" element={<Feed/>}/>
        <Route Component={NotFound}/>
      </RRoutes>
  </BrowserRouter>
  )
};
