import "../styles/clubes-board.css"

const ClubesBoard = () => {
    return <div className={"clubes-board-container"}>


        <h1 className={"big-title"} style={{textAlign: "center", color: "white"}}>Clubes</h1>
        <div className={"clubes-board"}>

            <ClubCard clubName="Software"
                      img="https://concepto.de/wp-content/uploads/2015/03/software-1-e1550080087611-800x400.jpg"
                      description="Equisdededede"
            />
            <ClubCard clubName="Ciencia de Datos"
                      img="https://www.unir.net/wp-content/uploads/2021/04/210419_img_ficha_web.jpg"
                      description="Es un campo interdisciplinario que involucra métodos científicos, procesos y sistemas para extraer conocimiento o un mejor entendimiento de datos."
            />
            <ClubCard clubName="Inteligencia Artificial"
                      img="https://www.seguritecnia.es/wp-content/uploads/2022/03/inteligencia-artificial-900x600.jpg"
                      description="AI DESCcccc"
            />
            <ClubCard clubName="Cyberseguridad"
                      img="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBISEhgSEhIRERgYERgSGBURERESGBERHBoZGRgYGBkcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QHBISGjQhISE0NjQ0NDQ0NDQ0NDQxNDQ0NDQ0NDQ0NDQxNDQ0NDQ0NDQ0NDE0NDQ1NDQ0PzQ0MTQ0NP/AABEIAKgBKwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQIDBAUGB//EAEUQAAIBAgQDBgMFBQYDCQEAAAECAAMRBBIhMQVBUQYTImFxgTKRoQdSscHRFEJigpJUk6Ky4fAjctIkM0RFU3ODwvEW/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECAwQF/8QAKxEBAQACAgECBAQHAAAAAAAAAAECEQMhMRJBBDJxgSJRkaETI0JhscHx/9oADAMBAAIRAxEAPwDya0W0daFp1ciWigRbRQIQ20LSS0LQbMyxcsfaFpUMywtJMsLQGWhaSWhaNCO0LSS0LRoR2iWkloWjQjywtJLRDAjywyx94ljIplo5KZO3zMcUkncAa216xtUYW22vU/pPevs+q95gaRveyZD6qSv5TwoJPRuxvHalHAPTpIWqd/kTS4RXXMWI8iGsOpmbB33aDjGDwi/9pqKCRcUwpd3G2iDUjz2nl/EO0uBNS9LD1lUnUN3Qt5qM23kZU7Q8IxFJ/wBpqM9TO13ZySyvyuTy+glakiFfGtv4tx7zc4cc52n8bLC7jsuA9qsLTJyULoVzM6spqoOedD+6D90zsHxdOrSFSm61EYXDLsR+R8p4zwDhpxeNSkC6oGu7pqUSxva/Xb3nf4rh9ThlCo1AZ6IpsWR21DWsHB63tfrM3HHHqEyyy7ry3i9Tvq9WpyeqxHpew+gEyGXKcpPpNIIQOukjI184aimUMbaXlW8DTBgULRLS41AekiahAr2hHsto2AkIQhVu0LR9otprTmaBFtHWi2gNtFtFtFtAS0LRbRbShtoWjrQtAbaFo60LQG2haOtC0BtoWjrQtAaRBadxfzivtH0NRbqJmrAKUcacfTN5LlgV8kVE015aSW0TZh56e/KAr4VxTFTKchbIG5FhqRO6+ykg1qqG+tJWAubHKxB02PxCcLVJta5te9uV51P2dYnu8fS/jR6XzXOPqgko9T7QYSmaDlwCq02c3GlgpJ/CeRcL4caihLbXDMdbm5sB87e09b7ZVMuBrWJBan3YtqczkIAPPxTiDgWwGHVmF3YXpq67vpd330HTmbcrzrxdS1z5fMjX7AcJWglWm6ZKyVjnU2LBGGamfQqfxk32lVu7wDLzd0pjzGbM3+FTMT7OGqDG1u8Zm7ylnZ2JYsyuNSevjMtfajxIq1OgoVwyPUbMoNtlQjofj1nPKfibxv4Xl5WFOgGNi6podWva/T1lmvTpgLkcuSl2BXLke+w6+soVXu9uS/5jCgsBoIwGBjgJFFpC55e/sJO0qsdCf5R+cKqs12ixhOvvJDEKaREjokC8BFtCLaaYJaKBFtFtKEtFtFiwG2haLFgJC0WEBIWiwgJaFosICQiwgRvuBJKYkTjxSxTEypNnI9/Yy0sr4+g9N1DqyG1rMCDY6gySi14EtpG9Bn8KC5vpbrLmLwppvkLIxsDdGDDUX3Es4RAtF6h6hPMg3JH+Ee3rLpLdRXXBoVu1QeeXxAHpfQfImaHZ96VKulRXLFHV9Rl2OvXlMBa5LFDtuoGgHUCW8GCrXlx7umMr6cbbXqvbviFu5phrDOazkW+FPhA8yTp5gTBxeH4ljbO9Byv7oK5Aq8gua1xbnOi4Xhs60sQyK9epSXuxUF0w9JAM1VhfXVrjW5zLqNSL+G46oDBC+IsxLVajIgY6fCFX4emg9951x66k28meXqu8stS+HG9msLVwmNBrI9PNTdPGpUN8LeEnQ/DymZ2xxrVcZUcZgq2oq2tjkHi/xFp6hw7ilDGKyAar8VNwLjlmBG48xqPLSeZ9r+GVMNVNIuzoSaqFujE3v/FcEH2POZs3b1qtYZ+nGd7lvlzVRhbxAA7KRoCx0AP6zIRCN9+frND4qgU/AniY+f6/rIMQLksNQTOdj143vSCLaKqEwfSRtFWeymV3Q5VXyufU6wxD38PUgfWWaqASKz6i2EcIVtYJtEKSJHGJKjQhaEUTTIEIRYBCLCAkWEWAkIsICWhFtCAkIsICQixrmwgRc5ZpiVqYllDMqTidRmXM5LEW1Ykmw0/CLhn0kWOfwEb6fKMwTeEekHs0rzSwY7ymaY53HpU0K/OxX3mYguQJdpP3dQLTtmvlLE2F9vS3rNRnLwya6EG/MGamFTNYjpeaGPpU6hZygzq2V+7YWzXtnG4IPlz9ROn+z/gmFrrVNRDUylMoZmTLmz3+FtdhvN4SY31X2ebnyuUmM812XH27rAuF2FNEsDbwFlUgfykicHRLCyoxyHUt1PO/Q+U9RrUEdSjorqbXVgGU2IIuCNdQPlKtXD4SkBnTDUgxsMy0UDHoL7maw5Jj1px5eG5ZTLcmppxPBGCY2jk0zEqQPuFWuW9fyvLv2lU1KUXO4LjTmPBpOuXAUQwdaVIMNQwRAR720kfEeFUMUFWvTzhSSvidbXtexUjoIucuUpjw2YWb83bwHEnSyiwvffc9T1Mp06ljY7Hf/Sa3FsOEqOq6AOwA3sAxAmeHGzi46iwM55TWT18V3jKt8KVVqWqEW623Ep8cdM5yG49I/HUstNXViRcgHQdDY+ep+kxqzk7kzOXXTrj32ZSJZ19bzQrL+8x9BM/DsCw0tYWOvxS5iXG3+xMt1UKliTsIlPb3l7B4dW/7w5F6ytWVVchDcdYibMMbaPMbKL0WEWaZEWEWAkWEIBCKIkAhHQgNhHQgNhCEAkdXa0kkVQ6yUhL2kiVhsRCkilWLOFIF1Fic5vtflImcAXOg+reQkU7FlAhN9xoPOR4LEeAJlXRs2a3i6Wv0lWoxc3Og5DoJd4NhDVOURO6t6i7h6tmB6EGWatA94Ry3v/DyPyt85VxOHNM5Tvea+JCGmiUyxbuw5zAAtvdRbe1iR5E9BNaYtR8LWp3n/DBY8xa9xzBHMT037PEULWK3W7JdTujDPcX5ieX8I4i9CpmTe1tRynpf2bVS64hjuWQn3zzc+WvNyz+bj93b2nCfaCoFWmc1z3RGT7oDGze5JH8k7ycX2w4TXrV1enTZ1FBVutrZgzm2/Qj5y8Vkyltcvipbx2SbdNwVQMNSCvmHcpZrWzDKOXL0l4b+8z+BUWTC0kdSrLTAKncHpNDmPWYvmu2Hyz6PDONJTNWpdip7x+Vx8RmbQSmGF2RypzAFSQ1uRBteWeON/wAap/7j/wCYzNo0CCHc5FBvfmx6KOc1n5Z4Jrj8jH1gaJ0ygv4R565j9V+kyjRQ0y+YXB26y5xytmcWGVcoKqNgCL/iTMWoZzyvb18c6+pcIfHNdKS72v5zGo2zaX95uUcS6q1NTZWtmGmttpmOmSjjqhPhEo3sZfxK2uZn3kpFkG4vCMpHS0kmmV2KIkWaZKIsSLAIQhAI6EIBCEIQQhCAQhCFEqO1zLLnQyog5yVYlXXU7CVatZS1zrbQDkBJHTP4cwUDccyYytgwtiNRz52mWppE9a+g0k3DcW1M3U21lRnHKPpsDewtrteJVs6a1TEtUNzNDDuKiqMwR0+Ek2DC97X5EEnXz8hMekZYQzUrnY13w7OfhKON0tbP5qOvl8ug3+yvaN8FmUU1cOVvmZlIy5rWI/5jynK4fH1E0DXHRgGHyOk3MLxJKhAqU0zffAIv6gEX9fxnTGzw8vNjlrc9noFHtyCLthiPNaob8VEl/wD7mh/6VYemQ/nOcp2CX7tCOoLEH6yhicTa1qaDf92/4ztOPC+zxZcnNj77+zuqXaxKg8FFyejMqfXWVMZ2tqpr+yqnQtVLfRVBnOUsS55205afhMzH46pTe6uR9ZLhjPZrHLmv9X7MnH4umHZwmdmctdh4QSb6D35zEqGpWfW5+gA/ITSx3EGViCqHXmifpMrE4+owtcKOigKD6gThllLXv4sLMZqIeJ1AXspuFULfrbc/jMyoZO35yvUnOvTjNTSXBhcxzZrWPw235S2KtpQotYe8nRS36nYSRb5TYmoGTT0lalQZtgTYXNug3MSu42Gttz1MYlUjY2g10mXf2j5CH2k0sZXYoiRRNslEWIIsAhCKICwjY6AQhCAQhCEEIQgQ4lwF1lWorczlHQC+nrJcSLkDpr7xKVM7nbkOszW54Vsi31znzUg/Mco9RT5O9/MgflLIpsfhe3kUU/hEfDkizBW81BUiTS7V2RT1PqF/ESFVsbDrEqhl8JOnXqI9FPPyMKtUZYWV6BlhTKwkWaODGomek08At2AG5IE1j5cuX5XXYFyE06SLGZdCy28xpJsOMgswsRoR0Mg4pibqLID4rXIJ5aDyvrPVi+ZyTpbpUk3VrjTW1pkcYZE1+I8r7XmrhAM1iMo6XvbymP2lqAeEWsCTe2vzkydMI5WtUQls4Ykjw5SNG8/KZzmWK5ldjPLl5fTw8IWlepLDSu9pmukLTAHxXPRRufXpH1KxOmijousarsdBb1lijhDz08yDeRaaMDfZx8oowFt2v6CWlw6jnf1kT0ByZl9CSPkY0nqUa9PKdL25SVH0ja5bZvYjnIlvIrYvFESE6uR0WNvFvAdCJCAsICEB0I2OgEIRsB0I2LeBTqm5J87SVHLaDwj8pKuH7w2vYA6+cWsmUkLYCwF/KZU/B4Z6tRaNFc7sbamwA3JYnQADWdS3ZWnh1DYuozknRMKqi227uNdTyUR/2XYem9eqrEB+7TJcgXTMc9vfJf2npTUEw5INSnTZtVzuoL9Ra9558+W45a109OPD68Lq6vs4LDrw+j/5bVqEj4qtFK5t6vcD2AmZxDgeFxdTvKFLEYPTxIaVPISOahnXL6DTyGt/Sk4kxBNqmmuotcdQDY/PWR0uM5zZc9/PT85ceTDe/wDbleHm9Orf2ebU+xif2hx/8dL8qknXsdT/ALQ/93T/AOuelPVqEaZv6pS/aqv8X9U745Y5eHmywzxvdv6OHTsjTH/iH/u6f/XJk7NIhuKzH+RB/wDedl39Xz/qH6xTWc7g/wBYm505ZTKzu39HPU8KAts7H+UfrIK3Dg377D2H6zpTUPNT/WI1qg+639azpMnHLht92HTwqj947dB+spY/g61d6jL/ACqfznTtVH3W/rEjar5H+sRcicdnu47EdlKbhb12GVcoy0V19bHUys3Y2n/aan91/rO2eq/IkfziMWq/Nrerj9Zyunox9X51zPCezeEovndHxjWOVXVQg88hWzHfc28rzUx2Pw+gfhge2gvh6bhfTwTfq4lKfhd7HpqT9JIlYMLjN7gr+M82WfHb3/l7MeP4iTq9fRz1DiOHfwjh4QAc8NTAH+CVcWuDxKlTgmosfCKqItIqb2BAAAa3ncTpMZiFpjM7gdBmFyZmcT43TKouHr5mYjOoV1ZBzzE7Dbbfl1k9fFO5O/qs4fistz1an948sxiFGZTqUdkOlr2JBPzEjLAjTlrLGPpulV6dU5nznM2njJ1ze97+8x85UkAnQ29Z231tnVnSWuQRr1+UrZWjmOkdnHWFjQBigxgMcDNuR14t4y8W8ofeLeR3i3gPvFvGAxbwH3heNvC8B14XjbwgLeLeNvC8Cxhdz6SKoLvl6sPl/wDkKb2P0lujhC9TP+7kBv8AxWt/v1kpHRdk+FmpUqNTDXRFChf42vf2yW952GF7PYotmqVG9CS05DsniqlDGU+7PxE0yvJ1YGyn+YLbzAnpuHx2IqKQ9I076Zg9jby1BE8XNjPV2+j8NnZh17K68CqgX3PK5mViOGPTctWqU6a75mcC/kBufSaeJ4ZhEcHEVlDkXCvUzMfMLv8ASOfD4eomWnSer0LKUW/Uk2P0nL0yf9d/Xv339nJ9oeNUMIAA71ndGZEVWRQNQruWsct77A3ynzM8xpU1GmUfITou3vdfteSkwcpTWnUKkFVcE+AEb5QQD8uRnPrPZw4zGb/N8/nzuWWt9RMEX7q/IRQi/dHyEQCPUTs84Ki2w+QkKAdB8hJ3Gkhpxs1CvboPkJXYA/uj5CTvIWWNkkQso+6vyEicDkAD1sNDJHkbmRqPdOzPEaHEaPf6U3DFHRyPDUAVjlPNTmFvXymm2FpnwrVpFuQFRSflecx2S7v9kpVcMVYLSWnWp3yk1VAzhtNGzEsDzDdDLXFlwbEO9PEC41U0w5HuGtPnZ6mV6fVwlsl3tlcdwQFS1XEU6a22uXYa/cW5+krDDYKgAwqGuTyVGuT7gW95cwy4JmyrRxX/ADGmij/PKvHK+FwtJqndsxLZUGxNQgkA66CwJMzJb1HTPKYzdrzzjGOFas9QLkBayre+VQLC566fWZfOOLE76/rGz6Empp8q3dtoPSPyxAIt5ZGVu8UGRXihptjSYNFzSINFzQiW8LyK8W8CS8W8jvFvAfeLeR3i5pQ+8LxuaF4DrwvG5oZoDrzW4XiQRl5gfMdZj5oq1CpBBsRzkG+lw5sSD8QKkgqw1FiNQefynpeE7WH9lw+KqL3lFl/Z8VURWL4XFL4e8ZV+JG32uLg63tPK6OIFRRUDhaiXY0zYLVpgXOVuTABiB5WlN+M4nC1GfC16lIPZiEYhHRhdc6HwtzGonPPGWOmFsvT29cRgbl1xGE11/wCGyOxPotz9JR7WdpUwuDepQYFmbuaZ2JqEG7m+wQXPK5AG2s8qwfbjHO6qz0FuQC4wmEDAdb5LfSZ3FeJ1MVUNSrUep93OxOROQUbKDa9hbUznjxSXbrnzZWaVkW1gOXqZKum8gyiPpTu864hkoMgpx8Ie20qIWvZQCS2UAuq3Y8hc6yd20lJ6SNqSwbNYgKGDJ5G+jb6HTbXeFiyW1IIKkEqQRYqwNiCOoMY0Ytt9Sbk3Y3PvAvCoHMicySoZA/5SLGrwDtFiMDUL0WUBwFdHUOjqL2zLe+lzYgg6nXWeu9mOP0MfTbNRdHpgB0pqai67MlrnKbHe3TW154TaWKOIdQGRnVlFrozKSnqDy/TpMZYY5eY648mWPivd8fXo0hnam9JbC74hkwyC/m5zH0VSTyE8r7ccXo4ioq4Zi1JCxDFSpdzYF7EA8gNeSicrVVi1ySxJ+IknN53MlrWuAL2VQNtgdbn+qZx48cbuNZ8uWU1aigo5xxC8r+p5nrEnTTiWJC8JRLeLeEJWS3i3hCAXi5okIQuaGaEIChouaLCAmaGaLCUGaGaEIBmhmhCAjH/Y5S1xCpTrDOAEbLbIuig5rgAnYWLWv0tCElWM7vCBbw22soH1POAaEJI1UiSxRG/r/pCErNWlEdaEIZIw0lQHU+sIQsKwkZhCFRtK7HWEJFhhiBrajSEJGjw49PLcX2uOkc73JI5/hy/ARYRCmXhCEqC8S8IQP//Z"
                      description={"siver ceguridad"}
            />

        </div>
    </div>

}
const ClubCard = (props) => {
    return <div className={"club-card"}>
        <div className={"club-card-img-wrapper"}>
            <img className={"club-card-img"} src={props.img} alt={props.clubName}></img>
        </div>
        <div className="club-card-content">
            <h2>{props.clubName}</h2>
            <a>{props.description}</a>
        </div>

    </div>
}


export default ClubesBoard

