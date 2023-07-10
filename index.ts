const boxTS = document.querySelector('.boxTS') as HTMLElement;
const inputTS = document.querySelector('input');
const linkTS = document.querySelector('a');
const pTS = document.querySelector('.paragraph') as HTMLParagraphElement;

console.log(inputTS?.value);

if (linkTS) {
    console.log(linkTS.href);
}

linkTS?.addEventListener('click', (e)=> {
  e.preventDefault();
});



//todo tsc index.ts