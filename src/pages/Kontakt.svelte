<section>
    <ul>
        <li>
            <a href="mailto:ines.siegfried@bluewin.ch">
                ines.siegfried@bluewin.ch
            </a>
        </li>
    </ul>
</section>

<style>
section {
    display: flex;
    align-items: center;
    justify-content: center;
}

a {
    color: white;
    text-decoration: none;
}

ul {
  list-style: none;
}

li {
  position: relative;
  padding-left: 1.5rem;
}

li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-left: 8px solid var(--purple-light);
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
}
</style>
