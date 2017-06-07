const visibilityFilter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
      case 'SHOW_ACTIVE':
        return action.type;

      case 'SHOW_COMPLETED':
        return action.type;

      default:
        return 'SHOW_ALL';
    }
}

export default visibilityFilter;
