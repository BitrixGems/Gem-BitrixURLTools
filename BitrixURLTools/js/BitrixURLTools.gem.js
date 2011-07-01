/**
 * Тулзы для работы с БУГом
 * @return
 */
function BitrixURLTools(){

    this.getIBlockID = function(){
		sIBlock = window.location.search.match(/(?:IBLOCK_ID=)\d+/ig);
		iIBlockID = null;
		if( sIBlock !== null ){
		    iIBlockID = sIBlock[0].split('=');
		    iIBlockID = iIBlockID[1];
		}
		return iIBlockID;
    }

    this.getElementID = function(){
		sIBlock = window.location.search.match(/(?:(&|\?)ID=)\d+/ig);
		iElementID = null;
		if( sIBlock !== null ){
		    iElementID = sIBlock[0].split('=');
		    iElementID = iElementID[1];
		}
		return iElementID;
    }

    this.isIBlockElementEditPage = function(){
		return window.location.pathname.search( /iblock_element_edit\.php/ig ) != -1;
    }

    this.isIBlockElementAddPage = function(){
		return this.isIBlockElementEditPage() && (this.getElementID() === null);
    }
	
    this.isIBlockSectionPage = function(){
		return window.location.pathname.search( /iblock_section_admin\.php/ig ) != -1;
    }
	
    this.isIBlockElementPage = function(){
		return window.location.pathname.search( /iblock_element_admin\.php/ig ) != -1;
    }

    this.isVotingGroupsPage = function(){
		return window.location.pathname.search( /vote_channel_list\.php/ig ) != -1;
    }

    this.isVotingChannelEditPage = function(){
		return window.location.pathname.search( /vote_channel_edit\.php/ig ) != -1;
    }

    this.isVotingEditPage = function(){
		return window.location.pathname.search( /vote_edit\.php/ig ) != -1;
    }
  

}

