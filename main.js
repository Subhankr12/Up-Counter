var current = document.querySelectorAll(".current")
var next = document.querySelectorAll(".next")
var val
var interval
var count = 0
var i = current.length - 1

function startCounter() {
  val = document.getElementById("counter-value").value
  interval = setInterval(animate, 1000)
}

function animationHandler(i) {
  next[i].classList.add("animate")
  setTimeout(function () {
    current[i].textContent = next[i].textContent
    next[i].classList.remove("animate")
  }, 500)
}

function animate() {
  if (current[i].textContent == 9) {
    while (i >= 0 && current[i].textContent == 9) {
      next[i].textContent = 0
      animationHandler(i)
      i--
    }

    next[i].textContent++
    animationHandler(i)

    i = current.length - 1
    next[i].textContent = 0
  } else {
    next[i].textContent++
  }
  if (count >= val) {
    clearInterval(interval)
    return
  }
  count++
  animationHandler(i)
}

function resetCounter() {
  clearInterval(interval)
  document.getElementById("counter-value").value = "0"
  count = 0

  for (let i = 0; i < current.length; i++) {
    current[i].textContent = 0
    next[i].textContent = 0
  }
}
