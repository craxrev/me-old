exports.shouldUpdateScroll = ({ prevRouterProps, getSavedScrollPosition }) => {
    return (
        prevRouterProps && !prevRouterProps.location.pathname.includes("/blog")
    )
}
