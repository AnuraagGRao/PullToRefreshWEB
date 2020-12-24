function refresh(event) {
  var draggable = document.querySelector("#draggable");
  var spinner = document.querySelector("#spinner");
  var touch = event.targetTouches[0];
  var height = touch.pageY;

  if (height < 200) {
    draggable.style.height = height + "px";
    draggable.style.transition = ".3s";
    setTimeout(function () {
      draggable.style.height = "50px";
    }, 500);
  }
  if (height > 200) {
    draggable.style.height = "50px";
    draggable.style.transition = ".2s";
    spinner.innerHTML = `
                          <div class='spinner-grow text-info'>
                              <span class="sr-only">
                                  Loading...
                              </span>
                          </div>
                          `;
    setTimeout(function () {
      location.reload();
    }, 1000);
  }
}
