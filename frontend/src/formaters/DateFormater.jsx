export default class DateFormat {
    static format(data) {
        if (!data) return "";

        const date = new Date(data);

        if (isNaN(date.getTime())) return "";

        const dia = String(date.getDate()).padStart(2, "0");
        const mes = String(date.getMonth() + 1).padStart(2, "0");
        const ano = date.getFullYear();

        return `${dia}/${mes}/${ano}`;
    }
}