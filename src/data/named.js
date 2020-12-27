function named(data) {
    Object.keys(data).forEach((key) => {
        data[key].name ??= key;
    });
    return data;
}
export default named;
