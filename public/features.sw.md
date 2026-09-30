# Kuhusu RelaySMS

## Yaliyomo

- [Historia na matumizi](#historia-na-matumizi)
  - [Historia](#historia)
  - [Matumizi](#matumizi)
- [Uchambuzi wa kiteknolojia](#uchambuzi-wa-kiteknolojia)
  - [Vipengele vikuu vya programu](#vipengele-vikuu-vya-programu)
- [Njia za kuchunguza](#njia-za-kuchunguza)
- [Mifumo](#mifumo)
- [Madaraja](#madaraja)
- [Wateja](#wateja)
- [Wateja wa Gateway](#wateja-wa-gateway)
- [Kujiendeshea seva (itaandikwa kulingana na uzoefu halisi)](#kujiendeshea-seva-itaandikwa-kulingana-na-uzoefu-halisi)
- [Mafunzo tuliyopata](#mafunzo-tuliyopata)

---

## Historia na matumizi

### Historia

Mradi wa SMSWithoutBorders ulianza mwaka 2021 na baadaye, mwaka 2022, ukawa zana ya kupambana na uzimaji wa intaneti kutokana na ruzuku kutoka Internews na baadaye ufadhili endelevu kutoka Open Technology Fund (OTF).

SMSWithoutBorders ilianza na programu moja ya Android iitwayo SWOB (kifupi cha SMSWithoutBorders), ambayo baadaye ilibadilishwa jina kuwa RelaySMS. Katika miaka iliyofuata, kuanzia 2023, tulianza kuunda DekuSMS – programu ya ujumbe wa SMS yenye usimbaji fiche wa mwisho hadi mwisho.

Wakati huo tulikuwa tukitumia Raspberry Pi na modemu za USB kusambaza SMS kwa ajili ya RelaySMS; njia hii haikuwa na ufanisi kutokana na changamoto za umeme na za kiutendaji. Muda ambao huduma haikupatikana ulikuwa mrefu sana, na hivyo watu wachache waliitumia na ukuaji ulikuwa wa polepole.

Baadaye tulihamishia usambazaji kwenye DekuSMS, iliyofanya kazi vizuri zaidi na kupunguza muda wa huduma kukatika kwa zaidi ya 90%. Hii iliboresha uzoefu wa watumiaji wapya na kuongeza kiasi fulani cha matumizi ya huduma.

Uzoefu wetu wa kuunda RelaySMS unatokana na kuishi katika mazingira ambapo intaneti ilizimwa kwa sababu za kisiasa. Uzimaji huo ulidumu zaidi ya siku 90 katika mikoa 2 ya nchi, na kuweka rekodi barani Afrika. Hii ilikuwa Kamerun mwaka 2016.

### Matumizi

RelaySMS ni jukwaa huria la mawasiliano linalolenga kuwezesha kutuma ujumbe kupitia intaneti kwa kutumia SMS. Hili ni muhimu zaidi katika maeneo yasiyo na muunganisho wa intaneti; hali ambayo ni ya kawaida katika maeneo ya mbali na wakati wa machafuko.

Inajulikana wazi kwamba serikali hutumia intaneti kama silaha dhidi ya watu wake kwa kuizima kabisa (au kwa sehemu katika baadhi ya matukio). Hii huzuia watu kupata habari na taarifa za kuokoa maisha. Pia huzuia biashara na mawasiliano salama. Katika hali hizi, zana kama VPN na mbinu nyingi kuu za kukwepa udhibiti hazifanyi kazi kwa sababu zinahitaji kiasi fulani cha intaneti ili kufanya kazi.

Ni kwa hali hizi ndipo tunaunda RelaySMS. Ingawa tunajua kwamba SMS pia huzuiwa wakati mwingine wakati wa machafuko, kwa kawaida hufunguliwa haraka kuliko intaneti; huenda ni kwa sababu wapinzani bado hawaichukulii SMS kama tishio (zaidi ya mawasiliano ya mtu kwa mtu ndani ya nchi).

---

## Uchambuzi wa kiteknolojia

RelaySMS inaweza kutumika kwa njia 2: madaraja au mifumo (maelezo zaidi hapa chini). Bila kujali njia inayotumika:

- Maudhui ya ujumbe wa mtumiaji husimbwa kwenye kifaa chake – kwa kutumia algoriti ya Double Ratchet ya Signal kwa usiri wa mbele (forward secrecy).
- Ujumbe hutumwa kwa mteja wa Gateway (mara nyingi kifaa cha Android kinachoendesha DekuSMS). Kifaa hiki kisha husambaza ujumbe unaoingia (bado ukiwa umesimbwa) kwa seva ya wingu inayoendesha seva ya Gateway.
- Seva ya Gateway huamua ujumbe ni wa njia ipi na kuupeleka kwa seva ya daraja au ya mfumo ili uchapishwe.
- Kisha ujumbe hufumbuliwa kwa funguo zinazopatikana kutoka Vault (programu ya upande wa seva inayolinda na kuhifadhi taarifa za kuingia za mtumiaji). Ujumbe uliofumbuliwa kisha huchapishwa.
- Unapochapisha kwenye mifumo ya mtandaoni kama Gmail, mtumiaji hupokea SMS inayothibitisha hali ya ombi – kama ulichapishwa kwa mafanikio au ulishindwa kuchapishwa.

**Kumbuka:** Ujumbe unaopokelewa kutoka kwa madaraja ni majibu ya ujumbe wa awali uliotumwa kutoka kwa mteja. Hii hukamilisha kipindi cha Double Ratchet, kumaanisha seti mpya ya funguo huzalishwa (Ratcheting).

### Vipengele vikuu vya programu

- Wateja (programu za Android au iOS)
- Wateja wa Gateway: vifaa vya Android vinavyoendesha DekuSMS
- Seva ya Gateway: programu inayoamua ujumbe uchapishwe wapi
- Madaraja – maelezo zaidi hapa chini
- Mifumo – maelezo zaidi hapa chini
- Vault – programu salama inayohifadhi data nyeti kwa niaba ya mtumiaji. Hii inajumuisha funguo za usalama na tokeni za kuchapisha mtandaoni (maelezo zaidi kwenye Mifumo)

---

## Njia za kuchunguza

Kwa muda mfupi, zana kama RelaySMS zinaweza kutumika kuwasiliana na mifumo ya mtandaoni iliyoandaliwa kusambaza taarifa zinazoingia kwa wafuatiliaji waliojisajili. Hii inaweza kuwa katika njia za ujumbe kama makundi ya WhatsApp/Signal/Telegram.

---

## Mifumo

Hii ndiyo njia ya kwanza na ya asili ya mawasiliano ya RelaySMS. Kipengele hiki kinamtaka mtumiaji kuhifadhi ruhusa ya kufikia mifumo yake ya mtandaoni kwenye seva ya wingu inayoendesha Vault za RelaySMS. Aina za ruhusa zinazohifadhiwa ni tokeni za OAuth2.0 (zenye ruhusa ya kuchapisha pekee) na tokeni za akaunti (kwa mifumo kama Telegram). Tokeni hizi zimeundwa kumwezesha mtu wa tatu kufanya kazi kwa niaba ya mtumiaji, na mtumiaji hutumia viwango vya ruhusa (scopes) kuamua mtu wa tatu anaweza kuchukua hatua kwa kiwango gani.

Mtumiaji atalazimika kumwamini mtu wa tatu ili kutoa tokeni hizi; kwa kuwa kuna uwezekano kwamba mtu wa tatu anaweza kuchukua hatua kwa niaba yake bila idhini yake.

RelaySMS huwaelimisha watumiaji jinsi ya kuthibitisha kama mtu wa tatu amechukua hatua kwa niaba yao zaidi ya maombi waliyoyafanya wenyewe. Hili ni jambo la kawaida kwa karibu mifumo yote, kwa kuwa ruhusa anazotoa mtumiaji haziruhusu huduma kubadilisha (kufuta au kuhariri) kumbukumbu za hatua zozote inazochukua.

Faida za kutumia mifumo yako ya mtandaoni kwa njia hii ni pamoja na uthabiti unaoongeza uaminifu; mpokeaji anajua mtumaji ni nani. Kwa mitandao ya kijamii, mtumiaji anaweza kuwa na wafuasi wengi ambao wangenufaika kupata taarifa za moja kwa moja kuhusu yanayoendelea wakati mtumiaji yuko nje ya mtandao. Wafuasi hao hawawezi kuhamishiwa kwenye akaunti nyingine, na ujumbe unahitaji kusikika. Hii inatumika pia kwa makundi ambayo mtumiaji ni mwanachama.

Mtumiaji anatakiwa kuchukua hatua hizi wakati bado ana intaneti. Tunashauri sana hili lifanyike mapema katika maandalizi ya uzimaji wa intaneti. Tuna miongozo hapa kuhusu jinsi ya kujiandaa kwa uzimaji wa intaneti, pamoja na rasilimali zaidi hapa chini.

Mifumo inayotumika kwa sasa ni:

- Gmail
- Telegram
- Twitter (X)
- BlueSky
- Mastodon

---

## Madaraja

Njia hii ya kuchapisha kwa RelaySMS inachukuliwa kuwa ya pili lakini muhimu sana. Pale ambapo mtumiaji hana intaneti ya kuhifadhi mifumo yake ya mtandaoni, au angependa kutuma taarifa bila kutumia akaunti zake kuu, hutumia madaraja.

Madaraja hufanya kazi kwa kubadilisha namba ya simu ya mtumiaji kuwa jina mbadala la kudumu la barua pepe linaloweza kutuma na kupokea ujumbe. Mfano wa hali ni huu:

Mtumiaji mwenye namba ya simu +237123456789 anatumia mmoja wa wateja (kwenye Android au iOS) kuandika na kutuma ujumbe. Ujumbe husimbwa kwenye kifaa na kutumwa kwa mteja wa Gateway anayeutuma kwa seva ya Gateway. Seva ya Gateway hutambua kuwa ni ujumbe wa daraja na kuupeleka kwa seva ya daraja. Seva ya daraja kisha huunda jina mbadala kutoka kwa namba ya simu ya mtumiaji na kuhifadhi kwa usalama funguo za umma zinazohusika kwenye Vault. Mfano wa jina mbadala la namba ya simu ya mtumiaji huyu ungekuwa: 237123456789@relaysms.me.

Ujumbe wa mtumiaji hutumwa kwa wapokeaji waliokusudiwa kwa kutumia jina hilo mbadala. Hii ni faida kubwa ikiwa namba ya simu ya mtumiaji tayari inajulikana na mpokeaji – kwa kuwa huongeza imani juu ya chanzo cha ujumbe.

Pale ambapo mpokeaji anajibu ujumbe wa mtumiaji, jibu husimbwa na kurudishwa kwa mtumiaji kupitia SMS. Mtumiaji anaweza kisha kuufumbua ujumbe kwenye mteja wake wa RelaySMS (programu).

Njia hii huwezesha mawasiliano ya pande mbili kati ya mtumaji na mpokeaji. Baada ya jina mbadala kuundwa, ujumbe wowote unaotumwa kwake husimbwa na kupelekwa kwa mtumiaji kwa SMS.

[Inapaswa kuongezwa taarifa zaidi kuhusu sanduku la barua la jina mbadala ni nini na jinsi linavyolindwa hadi ujumbe utumwe kwa mtumiaji]

---

## Wateja

Wateja wanaoungwa mkono zaidi kwa RelaySMS ni wa Android na iOS. Wote hutoa vipengele tofauti, na mteja wa Android hupokea masasisho haraka kuliko wa iOS.

Wateja wote hutumia itifaki zile zile sanifu zilizoundwa kwa mawasiliano na Vault na kwa kuchapisha ujumbe. Viwango ambavyo kila mteja anapaswa kujumuisha ni:

- Kufungua akaunti kwenye Vault
- Kuingia kwenye akaunti kwenye Vault
- Kuhifadhi akaunti kwenye Vault kwa itifaki zifuatazo:
  - OAuth2.0 k.m. Bluesky
  - Uthibitishaji kwa namba ya simu k.m. Telegram
  - Kuchapisha ujumbe wa kwanza kwa Madaraja
  - Kuchapisha ujumbe unaofuata kwa Madaraja
  - Kuchapisha ujumbe kutoka kwa mifumo iliyohifadhiwa
  - Kuchapisha ujumbe kutoka kwa mifumo iliyohifadhiwa kwa kutumia kitambulisho cha kifaa
  - Kuhifadhi tokeni kwenye kifaa
  - Kuchapisha kwa tokeni zilizohifadhiwa kwenye kifaa

Dhana zilizoanzishwa hapa ni pamoja na:

- Kitambulisho cha Kifaa: Hii ni tokeni ya utambulisho inayozalishwa na kuhifadhiwa kwenye Vault na kwa mteja. Humruhusu mtumiaji kuchapisha ujumbe kupitia mifumo yake iliyohifadhiwa bila kutumia namba yake ya simu kama njia kuu ya utambulisho. Hii husaidia wateja katika simu zenye laini mbili ambapo namba inayotumika kutuma SMS inaweza kubadilika lakini taarifa zote muhimu za kutuma bado zipo kwenye kifaa. Hiki ni kipengele cha hiari na hakipaswi kuwashwa kwa chaguomsingi kwa wateja.

- Kuhifadhi tokeni kwenye kifaa: Tokeni za mtumiaji (za OAuth2.0 au za namba ya simu) huhifadhiwa kwa usalama hasa kwenye Vault. Wateja wana uwezo wa kuomba tokeni hizi zihamishwe kutoka Vault kwenda kwenye kifaa. Tokeni kisha huambatishwa kwenye ujumbe wakati wa kuchapisha. Katika hali ya tokeni ya kuonyesha upya (utaratibu wa kawaida wa OAuth2.0), tokeni mpya hurudishwa kwenye kifaa kwa SMS.

Wateja wako huru kutekeleza njia yoyote ya kuchapisha kulingana na mahitaji ya vipengele vya mradi wao.

Wateja chaguomsingi huwapa watumiaji uwezo wa kuwaelekeza kwenye seva yoyote ya Vault wanayopendelea – zaidi kwenye kujiendeshea seva. Hili lingehitaji kwamba mteja wa Gateway wanayemtumia kuchapisha pia aelekezwe kwenye seva hiyo hiyo ya Vault – vinginevyo ujumbe utashindwa kufumbuliwa upande wa seva.

Kwa kuwa kila mteja anaweza kuwa tofauti, kila mteja anapaswa kutoa miongozo yake mwenyewe. Miongozo chaguomsingi iliyotolewa na timu ya RelaySMS inapatikana hapa [weka miongozo ya RelaySMS]

---

## Wateja wa Gateway

Wateja wa Gateway ni vifaa vinavyoweza kupokea SMS zinazoingia kutoka kwa wateja wa RelaySMS. Wateja wa Gateway wanaweza kuendeshwa kwenye vifaa vya Android au vifaa vya Linux vyenye modemu za USB. Seva chaguomsingi za RelaySMS hutumia vifaa vya Android vinavyoendesha DekuSMS kama wateja chaguomsingi wa Gateway. Hata hivyo, ili kubadilisha kipokeaji chochote kuwa mteja wa Gateway, kinachohitajika ni kusambaza mzigo wa data katika muundo wa JSON [weka marejeleo] kwa seva ya wingu inayoendesha seva ya Gateway.

Kwa kuwa wateja wa Gateway hawashiriki funguo na wateja (wala hawawajui wateja mapema), hawawezi kufumbua ujumbe unaoingia. Ujumbe unaotumwa pia una usiri wa mbele; kumaanisha kila ujumbe husimbwa kwa ufunguo tofauti – hivyo kupata ufunguo wa ujumbe mmoja hakuwezeshi kupata funguo za ujumbe unaofuata.

---

## Kujiendeshea seva (itaandikwa kulingana na uzoefu halisi)

- Mahitaji
- Kuongeza mifumo
- Wateja
- Wateja wa Gateway
- Msaada
- Bitcoin
- Michango ya programu huria
- Paypal
- Njia zinazowezekana
- Intaneti kupitia SMS
- Ujumbe wote kupitia SMS

---

## Mafunzo tuliyopata

- Kuanza kwa nguvu: Kutoa programu mapema mno kabla haijakamilika kiufundi kunaweza kuwafanya watumiaji wawe na maoni hasi kuhusu programu. Ni vigumu sana kujinasua kutoka hapo, kwa kuwa mvuto wa mwanzo huchangia sana kujenga maoni ya watu. Kujua ni lini hasa ni "mapema mno" pia ni vigumu sana, na mara nyingi huwa tunatoa programu pale "inapohisiwa" kuwa tayari.
- Kujenga jumuiya mapema na kuwashirikisha wanachama maendeleo kadiri yanavyotokea huwafanya wote kuendelea kushiriki na kuwa wavumilivu zaidi kwa changamoto wanazokutana nazo. Tuliliona hili kwa DekuSMS, ambapo tulifungua chaneli ya Telegram mapema na kuanza kuwasiliana na wanachama kuhusu maendeleo na vipengele vinavyokuja. Watumiaji walishiriki changamoto zao na kutafuta taarifa mpya – na hata kama programu haikuwa tayari au ilikuwa na hitilafu, watu bado walijiunga na jumuiya.
