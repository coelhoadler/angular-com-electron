onload = () => {
    const _aQuery = document.querySelector.bind(document); // adlerQuery >>> jQuery
    const webview = _aQuery('#webview');
    const indicator = _aQuery('.loader');

    const showLoader = _ => {
        indicator.innerHTML = `
            <img 
                class="loader--image"
                src="./assets/images/logo-ftd-educacao.png" 
                alt="Loader da FTD Educação"
            />`;
    }

    const hideLoader = _ => {
        indicator.style.display = "none";
    }

    webview.addEventListener('did-start-loading', showLoader)
    webview.addEventListener('did-stop-loading', hideLoader)
}