import { useRef, useEffect } from "react";
import { showView } from "@/redux/uiSlice";
import ManageFeed from "@/components/ManageFeed";
import DeleteFeed from "@/components/DeleteFeed";
import CreateNewFeed from "@/components/CreateNewFeed";
import useOnClickOutside from "@/hooks/useOnClickOutside";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export default function SideContainer() {    
  const viewType = useAppSelector((state) => state.ui.sideViewType)
  const dispatch = useAppDispatch()
  const ContentView = (): JSX.Element | null => {
    switch (viewType.viewName){
      case "create_feed":
        return <CreateNewFeed/>
      case "manage_feed":
        return <ManageFeed id={viewType.params!.id}/>
      case "delete_feed":
        return <DeleteFeed id={viewType.params!.id}/>
      default:
        break
    }
    return null
  }
  
  // disable body scrolling when side container is pressed
  useEffect(() => {
    if (viewType.viewName !== "none") {
      document.body.style.overflow = "hidden"
    }
    
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [viewType]);
  const container = useRef<HTMLDivElement>(null)
  useOnClickOutside(container, undefined, () => dispatch(showView({ viewName: "none"})))
    return (
      <div ref={container}
        className={(viewType.viewName === "none" && "translate-x-full") + " fixed right-0 modal-container overflow-y-auto"}>
        <ContentView/>
      </div>
    )
}
