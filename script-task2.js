function filter_list(l) {
    return l.filter((e) => {
    return typeof e !== 'string'
    })  
}