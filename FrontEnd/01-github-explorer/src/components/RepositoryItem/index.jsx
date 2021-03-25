import React from "react";

export function RepositoryItem({ repository }) {
  return (
    <li>
      <strong>{repository?.name ?? "Default"}</strong>
      <p>{repository.description}</p>

      <a href={repository.html_url}>Acessar repositórios</a>
    </li>
  );
}
