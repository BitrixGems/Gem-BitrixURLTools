<?php
class BitrixGem_BitrixURLTools extends BaseBitrixGem{

	protected $aGemInfo = array(
		'GEM'			=> 'BitrixURLTools',
		'AUTHOR'		=> 'Vladimir Savenkov',
		'AUTHOR_LINK'	=> 'http://bitrixgems.ru/',
		'DATE'			=> '8.02.2011',
		'VERSION'		=> '0.1',
		'NAME' 			=> 'BitrixURLTools',
		'DESCRIPTION' 	=> "JS-библиотека для определения текущей страницы, редактируемого элемента инфоблока, секции, опроса и т.п. из URI-адреса административной страницы сайта.",
		'REQUIREMENTS'	=> 'jQuery',
	);

	public function initGem(){
		if( defined( 'ADMIN_SECTION' ) ){
			global $APPLICATION;
			$APPLICATION->AddHeadScript( '/bitrix/js/iv.bitrixgems/'.$this->getName().'/BitrixURLTools.gem.js' );
		}
	}
}
?>
