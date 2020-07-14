<?php

declare(strict_types=1);

/**
 * @copyright 2018, Maxence Lange <maxence@artificial-owl.com>
 *
 * @author Maxence Lange <maxence@artificial-owl.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

namespace OCP\Dashboard\Model;


use OCP\Dashboard\IDashboardWidget;

/**
 * Interface IWidgetConfig
 *
 * This object contains the configuration of a widget for a userId
 *
 * @see IDashboardWidget::loadWidget
 *
 * @since 15.0.0
 *
 * @package OCP\Dashboard\Model
 */
interface IWidgetConfig {


	/**
	 * Returns the userId
	 *
	 * @since 15.0.0
	 *
	 * @return string
	 */
	public function getUserId(): string;


	/**
	 * Returns the widgetId
	 *
	 * @since 15.0.0
	 *
	 * @return string
	 */
	public function getWidgetId(): string;


	/**
	 * Returns the current position and the current size of the widget as
	 * displayed on the user's dashboard
	 *
	 * The returned value is an array:
	 * [
	 *   'x'      => (int) position on the X axis,
	 *   'y'      => (int) position on the Y axis,
	 *   'width'  => (int) width of the widget,
	 *   'height' => (int) height of the widget
	 * ]
	 *
	 * @since 15.0.0
	 *
	 * @return array
	 */
	public function getPosition(): array;


	/**
	 * Returns an array with the settings defined by the user for the widget.
	 * The returned value is an array, with setting used as keys:
	 *
	 * [
	 *   'setting1'  => 'any value',
	 *   'setting2'  => 'other value'
	 * ]
	 *
	 * Each setting that can be edited by a user should be defined in a
	 * WidgetSetting.
	 *
	 * @see WidgetSetting
	 *
	 * Those WidgetSetting are in the WidgetTemplate defined during the setup
	 * of the widget in the IDashboardWidget.
	 *
	 * @see IDashboardWidget::getWidgetTemplate
	 * @see WidgetTemplate
	 *
	 * When using this framework, the settings interface is generated by the
	 * Dashboard app.
	 *
	 * @since 15.0.0
	 *
	 * @return array
	 */
	public function getSettings(): array;


	/**
	 * Returns if the widget is enabled/displayed in this user's dashboard.
	 *
	 * @since 15.0.0
	 *
	 * @return bool
	 */
	public function isEnabled(): bool;


}
