import { LitElement, html, css } from 'lit';

class RotateSpinner extends LitElement {
    static styles = css`
        #spinner {
            width: 50px;
            height: 50px;
            border: 5px solid #fff;
            border-bottom-color: transparent;
            border-radius: 50%;
            animation: rotation 1s linear infinite;
        }

        @keyframes rotation {
            0% {
                transform: rotate(0deg);
            }

            100% {
                transform: rotate(360deg);
            }
        }
    `;

    render() {
        return html`
            <div id="spinner"></div>
        `;
    }
}

customElements.define('rotate-spinner', RotateSpinner);