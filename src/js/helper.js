export const AJAX = async function(url) {
    try {
        const fetchCountry = fetch(url);
        const res = await fetchCountry;
        const data = await res.json();
        return data;

    } catch (err) {
        console.error(err);
    }
}