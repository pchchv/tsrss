type SideContainerViewType = "none" | "create_feed" | "create_provider" | "manage_feed" | "delete_feed"

// Pass whatever params inside.
interface SideContainerViewProp {
    viewName: SideContainerViewType
    params?: { id: string }
}

interface InitialReduxState{
    darkMode: boolean,
    sideViewType: SideContainerViewProp
}
