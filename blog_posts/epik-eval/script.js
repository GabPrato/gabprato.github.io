// Slide 33-34 animation
document.addEventListener("DOMContentLoaded", function() {
    var image1 = document.getElementById('slide33');
    var image2 = document.getElementById('slide34');
    var visible = true;
    var transitionDelay = 700; // Delay in milliseconds

    setInterval(function() {
        if (visible) {
            // Fade out image1
            image1.style.opacity = 0;
            // Delay before fading in image2
            setTimeout(function() {
                image2.style.opacity = 1;
            }, transitionDelay);
        } else {
            // Fade out image2
            image2.style.opacity = 0;
            // Delay before fading in image1
            setTimeout(function() {
                image1.style.opacity = 1;
            }, transitionDelay);
        }
        visible = !visible;
    }, 4000 + transitionDelay); // Total cycle time including the delay

    // Reset animation
    image1.addEventListener('transitionend', resetAnimation);
    image2.addEventListener('transitionend', resetAnimation);

    function resetAnimation(e) {
        e.target.style.animation = 'none';
        setTimeout(function() {
            e.target.style.animation = '';
        }, 0);
    }
});

// Bibtex copy button
document.querySelectorAll('.copy-text-icon, .copy-text-icon-hover').forEach(function(element) {
    element.addEventListener('click', function() {
        const bibtexText = `@ARTICLE{2023arXiv231015372P,
       author = {{Prato}, Gabriele and {Huang}, Jerry and {Parthasarathi}, Prasannna and {Sodhani}, Shagun and {Chandar}, Sarath},
        title = "{EpiK-Eval: Evaluation for Language Models as Epistemic Models}",
      journal = {arXiv e-prints},
     keywords = {Computer Science - Computation and Language, Computer Science - Artificial Intelligence},
         year = 2023,
        month = oct,
          eid = {arXiv:2310.15372},
        pages = {arXiv:2310.15372},
          doi = {10.48550/arXiv.2310.15372},
archivePrefix = {arXiv},
       eprint = {2310.15372},
 primaryClass = {cs.CL},
       adsurl = {https://ui.adsabs.harvard.edu/abs/2023arXiv231015372P},
      adsnote = {Provided by the SAO/NASA Astrophysics Data System}
}

`;
        // Use the navigator.clipboard API for modern browsers
        if (navigator.clipboard) {
            navigator.clipboard.writeText(bibtexText).catch(err => {
                console.error('Error copying text: ', err);
            });
        } else {
            // Fallback for older browsers
            const textarea = document.createElement('textarea');
            textarea.value = bibtexText;
            document.body.appendChild(textarea);
            textarea.select(); // Select the text
            document.execCommand('copy'); // Copy the selected text
            document.body.removeChild(textarea); // Remove the temporary textarea
        }
    });
});