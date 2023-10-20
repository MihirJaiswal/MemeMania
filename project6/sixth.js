const insert = document.getElementById('insert'); 

window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
    <div class="color">
      <table>
        <tr>
          <th>Key</th>
          <th>Code</th>
        </tr>
        <tr>
          <td>${e.key === " " ? "space" : e.key}</td> <!-- Check for space key -->
          <td>${e.code}</td>
        </tr>
      </table>
    </div>
    `;
});
