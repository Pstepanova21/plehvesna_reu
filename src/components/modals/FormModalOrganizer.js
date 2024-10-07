import React from "react";
import background from "../../assets/img/A4 - 10 1.png";
import { validateForm } from "./FormModalValidation";

const FormModalOrganizer = ({ closeModal }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    if (validateForm(form)) {
      console.log("Форма отправлена");
      closeModal();
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <img src={background} alt="Заголовок" className="modal-image" />
        <form onSubmit={handleSubmit}>
          <label>
            ФИО:
            <input type="text" placeholder=" " className="input-field" />
          </label>
          <label>
            Ссылка на личную страницу Вконтакте:
            <input
              type="text"
              placeholder="vk.com/me"
              className="input-field"
            />
          </label>
          <label>
            Курс:
            <select className="input-field">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="mag1">1 курс магистратуры</option>
              <option value="mag2">2 курс магистратуры</option>
            </select>
          </label>
          <label>
            ВШ/Ф/И:
            <select className="input-field">
              <option value="ipam">ИПАМ</option>
              <option value="vshki">ВШКИ</option>
              <option value="vish">ВИШ “НМиТ”</option>
              <option value="vshm">ВШМ</option>
              <option value="vsheib">ВШЭиБ</option>
              <option value="sftm">СФТМ ВШ “Форсайт”</option>
              <option value="vshsgn">ВШ СГН</option>
              <option value="fb">ФБ “Капитаны”</option>
              <option value="vshp">ВШП</option>
              <option value="vshf">ВШФ</option>
              <option value="vshkmis">ВШКМиС</option>
              <option value="fpshb">ФПШБ “Интеграл”</option>
            </select>
          </label>
          <label>В какой структуре ты бы хотел(а) попробовать себя?</label>
          <div className="checkbox-group small-text">
            <div className="checkbox-item">
              <input type="checkbox" value="external" />
              <span>Внешние связи и коммуникации</span>
            </div>
            <div className="checkbox-item">
              <input type="checkbox" value="decor" />
              <span>Декор</span>
            </div>
            <div className="checkbox-item">
              <input type="checkbox" value="team_manager" />
              <span>Менеджер команды</span>
            </div>
          </div>
          <label>
            Есть ли у тебя организаторский опыт в выбранных структурах? Расскажи
            о нём:
            <input type="text" placeholder="Ответ..." className="input-field" />
          </label>
          <label>
            Почему ты хочешь стать организатором проекта “ПлехВесна. Музы
            искусства”?
            <input type="text" placeholder="Ответ..." className="input-field" />
          </label>
          <label className="checkbox-label">
            <input type="checkbox" required />{" "}
            <span className="consent-text">
              Я даю свое согласие на обработку моих персональных данных, в
              соответствии с Федеральным законом от 27.07.2006 года №152-ФЗ «О
              персональных данных», на условиях и для целей, определенных в
              Согласии на обработку персональных данных.
            </span>
          </label>
          <div className="button-container">
            <button type="submit">Отправить</button>
            <button type="button" onClick={closeModal}>
              Закрыть
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormModalOrganizer;